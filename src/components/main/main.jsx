import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './main.module.css'

const Main = ({isLogin, authService}) => {
  const navigate = useNavigate()

  const onLogout = () => {
    authService.logout()
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
        <section className={styles.main}>
          <h1>Main!!</h1>
        </section>
        <Footer/>
      </main>
  )
};

export default Main;