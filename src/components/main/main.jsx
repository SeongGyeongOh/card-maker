import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './main.module.css'

const Main = ({isLogin, signout}) => {
  const auth = getAuth()
  const navigate = useNavigate()

  const logout = () => {
    signOut(auth).then(() => {
      signout()
      navigate("/")
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <main className={styles.container}>
      <Header isLogin={isLogin} logout={logout}/>
        <section className={styles.main}>
          <h1>Main!!</h1>
        </section>
        <Footer/>
      </main>
  )
};

export default Main;