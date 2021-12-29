import React, { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CardMaker from '../card_maker/card_maker';
import CardPreview from '../card_preview/card_preview';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './main.module.css'
import img from "../../images/default_logo.png" 

const dummyUsers = [
  {id: 1, name: 'AAA', profile: null, company: 'AAA.corporation', position: 'Engineer', email: 'aaa@aaa.com', comment: 'know that the pain will pass', color: ['dark', 'blue', 'purple']},
  {id: 2, name: 'BBB', profile: null, company: 'BBB.corporation', position: 'Engineer', email: 'bbb@bbb.com', comment: 'and when it does', color: ['dark', 'blue', 'purple']},
  {id: 3, name: 'CCC', profile: null, company: 'CCC.corporation', position: 'Engineer', email: 'ccc@cc.com', comment: "you'll be stronger, happier and more sensative and aware", color: ['dark', 'blue', 'purple']},
]

const Main = ({isLogin, authService}) => {

  const [users, setUsers] = useState(dummyUsers)

  const navigate = useNavigate()

  const onLogout = () => {
    authService.logout()
  }

  const makeCard = () => {
    // const newUsers = [...users, user]
    // setUsers(newUsers)
    console.log("asdf")
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
        <CardMaker users={users} makeCard={makeCard}/>  
        <CardPreview users={users}/>
      </div>
      <Footer/>
      </main>
  )
};

export default Main;