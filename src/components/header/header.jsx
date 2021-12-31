import React, { memo } from 'react';
import styles from './header.module.css'
import logo from '../../images/logo.png'

const Header = memo(({onLogout}) => {
  console.log("header re-render")
  return (
    <header className={styles.header}>
      <img className={styles.img} src={logo} alt='logo'/>
      {
        onLogout &&
        <button className={styles.button} onClick={() => onLogout()}>
          로그아웃
        </button>
      }
      <h3 className={styles.cardName}>Business Card Maker</h3>
    </header>    
  )
})

export default Header;