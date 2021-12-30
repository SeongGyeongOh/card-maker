import React from 'react';
import styles from './card.module.css'

const DEFAULT_IMAGE = '../../images/default_logo.png'
const Card = ({user}) => {
  const {
    name, profile, company, position, email, comment, color
  } = user

  const url = profile || DEFAULT_IMAGE

  return (
    <div className={`${styles.container} ${getStyles(color)}`}>
      <img className={styles.img} 
        src={require('../../images/default_logo.png')} 
        alt="logo"
      />
      <div className={styles.profile}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.company}>{company}</p>
        
        <div className={styles.divider}></div>
        <p className={styles.position}>{position}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.comment}>{comment}</p>
      </div>
    </div>
  )

  function getStyles(color) {
    switch(color) {
      case 'dark':
      return styles.dark
      case 'blue':
      return styles.blue
      case 'purple': 
      return styles.purple
    }
  }
}

export default Card;