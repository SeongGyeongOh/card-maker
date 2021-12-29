import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css'
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Login = ({authService, isLogin, login}) => {
  // const auth = getAuth();
  const navigate = useNavigate()
  const google = 'google'
  const github = 'github'

  const goToMain = (user) => {
    navigate({
      pathname: '/main',
      state: {id: user.uid}
    })
  }

  const processLogin = (provider) => {
    authService
      .login(provider)
      .then(data => {
        login()
        goToMain(data.user)
      })
  }

  const snsLogin = event => {
    const provider = event.currentTarget.className.includes(google )
      ? new GoogleAuthProvider() 
      : new GithubAuthProvider()
    processLogin(provider)
  }

  useEffect(() => {
    authService.onAuthChange(user => {
      user && goToMain(user.uid)
    })
  })

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