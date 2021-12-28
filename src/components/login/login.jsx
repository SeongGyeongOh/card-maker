import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css'
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Login = ({authService, isLogin, login}) => {
  // const auth = getAuth();
  const navigate = useNavigate()

  const processLogin = async(provider) => {
    await authService.login(provider)
    login()
    navigate('/main')
  }

  const loginGoogle = () => {
    const provider = new GoogleAuthProvider()
    processLogin(provider)
  }

  const loginGithub = () => {
    const provider = new GithubAuthProvider();
    processLogin(provider)
  }

  return (
    <section className={styles.container}>
      <Header isLogin={isLogin}/>
        <section className={styles.login}>
          <h3 className={styles.text}>Login</h3>
          <button className={`${styles.button} ${styles.google}`} onClick={() => loginGoogle()}>
            Google
          </button>
          <button className={`${styles.button} ${styles.github}`} onClick={() => loginGithub()}>
            Github
          </button>
        </section>
      <Footer/>
    </section>
  )
}

export default Login;