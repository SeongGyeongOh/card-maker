import React, { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CardMaker from '../card_maker/card_maker';
import CardPreview from '../card_preview/card_preview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './main.module.css'

const dummyUsers = {
  '1': {id: 1, name: 'AAA', profile: null, company: 'AAA.corporation', position: 'Engineer', email: 'aaa@aaa.com', comment: 'know that the pain will pass', color: 'dark'},
  '2': {id: 2, name: 'BBB', profile: null, company: 'BBB.corporation', position: 'Engineer', email: 'bbb@bbb.com', comment: 'and when it does', color: 'blue'},
  '3': {id: 3, name: 'CCC', profile: null, company: 'CCC.corporation', position: 'Engineer', email: 'ccc@cc.com', comment: "you'll be stronger, happier and more sensative and aware", color: 'purple'},
}

const Main = ({isLogin, authService}) => {

  const [users, setUsers] = useState(dummyUsers)

  const navigate = useNavigate()

  const onLogout = () => {
    authService.logout()
  }

  // const makeCard = (card) => {
  //   const newUsers = [...users, card]
  //   setUsers(newUsers)
  // }

  const createOrEditCard = (card) => {
    // map을 돌려 배열의 특정 데이트를 변경하는 건 데이터가 많아질수록 성능이 떨어진다
    // javascript의 특성을 이용하여 마치 배열의 인덱스를 사용하듯 key값으로 object를 찾을 수 있도록 데이터 구조를 변경해주자
    // obj = {
    //   1: {},
    //   2: {}
    // }
    // 상태를 바꿀 때의 state를 복사해와서 업데이트를 바로 시키기(콜백함수로 사용)
    setUsers(users => {
      const updated = {...users}
      updated[card.id] = card
      return updated
    })
    console.log(card.id)
  }

  const deleteCard = (card) => {
    setUsers(users => {
      const updated = { ...users }
      // delete: 객체의 속성을 제거하는 연산자
      delete updated[card.id]
      return updated
    })
  }

  useEffect(() => {
    authService.onAuthChange(user => {
      if(!user) {
        navigate('/')
      }
    })
  })

  return (
    <main className={styles.container}>
      <Header isLogin={isLogin} onLogout={onLogout}/>
      <div className={styles.main}>
        <CardMaker users={users} 
          createOrEdit={createOrEditCard}
          deleteCard={deleteCard}
        />  
        <CardPreview users={users}/>
      </div>
      <Footer/>
      </main>
  )
};

export default Main;