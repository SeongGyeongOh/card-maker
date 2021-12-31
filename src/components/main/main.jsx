import React, { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddForm from '../add_form/add_form';
import CardMaker from '../card_maker/card_maker';
import CardPreview from '../card_preview/card_preview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './main.module.css'

const Main = ({authService, FileInput, cardRepository}) => {
  const navigateState = useNavigate()
  const[users, setUsers] = useState({})
  const[userId, setUserId] = useState(navigateState && navigateState.id)

  const navigate = useNavigate()

  const onLogout = useCallback(() => {
    authService.logout()
  }, [authService])

  const createOrEditCard = useCallback((card) => {
    // map을 돌려 배열의 특정 데이트를 변경하는 건 데이터가 많아질수록 성능이 떨어진다
    // javascript의 특성을 이용하여 마치 배열의 인덱스를 사용하듯 key값으로 object를 찾을 수 있도록 데이터 구조를 변경해주자
    // obj = {
    //   1: {},
    //   2: {}
    // }
    // 상태를 바꿀 때의 state를 복사해와서 업데이트를 바로 시키기(콜백함수로 사용)
    // setUsers(users => {
    //   const updated = {...users}
    //   updated[card.id] = card
    //   return updated
    // })
    // if (Object.keys(users).length === 0) {
      
    // }
    // if (card.id !== null) {
    //   dbService.update(card)
    // }
    cardRepository.upload(card, userId)
  }, [])

  const deleteCard = (card) => {
    // setUsers(users => {
    //   const updated = { ...users }
    //   // delete: 객체의 속성을 제거하는 연산자
    //   delete updated[card.id]
    //   return updated
    // })
    cardRepository.deleteData(card.id, userId)
  }

  useEffect(() => {
    if (!userId) {
      return
    }
    const stopSync = cardRepository.getRealtimeData(userId, (cards) => {
      setUsers(cards)
    })

    // useEffect에서 return을 하면 화면이 unmount 되었을 때 해당 함수를 호출한다
    return () => stopSync()
  }, [userId, cardRepository])
  
  useEffect(() => {
    authService.onAuthChange(user => {
      if(user) {
        setUserId(user.uid)
      } else {
        navigate('/')
      }
    })
  }, [authService, userId, navigateState])

  return (
    <main className={styles.container}>
      <Header onLogout={onLogout}/>
      <div className={styles.main}>
        <div className={styles.maker}>
          <CardMaker 
            users={users} 
            createOrEdit={createOrEditCard}
            deleteCard={deleteCard}
            FileInput={FileInput}
          /> 
        </div>
        <CardPreview users={users}/>
      </div>
      <Footer/>
    </main>
  )
};

export default Main;