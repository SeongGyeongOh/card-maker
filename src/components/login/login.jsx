import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css'
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = ({authService, isLogin, login}) => {
  // const auth = getAuth();
  const navigate = useNavigate()
  const google = 'google'
  const github = 'github'

  const processLogin = (provider) => {
    authService
      .login(provider)
      .then(data => {
        login()
        navigate({
          pathname: '/main',
          state: {id: data.user.uid}
        })
      })
  }

  const snsLogin = event => {
    const provider = event.currentTarget.className.includes(google )
      ? new GoogleAuthProvider() 
      : new GithubAuthProvider()
    processLogin(provider)
  }

  return (
    <section className={styles.container}>
      <Header isLogin={isLogin}/>
        <section className={styles.login}>
          <h3 className={styles.text}>Login</h3>
          <button className={`${styles.button} ${google}`} onClick={snsLogin}>
            Google
          </button>
          <button className={`${styles.button} ${github}`} onClick={snsLogin}>
            Github
          </button>
        </section>
      <Footer/>
    </section>
  )
}

export default Login;