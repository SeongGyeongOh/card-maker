import React from 'react';
import styles from './header.module.css'
import logo from '../../images/logo.png'

const Header = ({isLogin, logout}) => {
  
  return (
    <header className={styles.header}>
      <img className={styles.img} src={logo} alt='logo'/>
      {
        isLogin && 
        <button className={styles.button} onClick={() => logout()}>
          로그아웃
        </button>
      }
      <h3 className={styles.cardName}>Business Card Maker</h3>
    </header>    
  )
}

export default Header;