import React from 'react';
import styles from './card.module.css'

const DEFAULT_IMAGE = '../../images/default_logo.png'
const Card = ({user}) => {
  const {
    name, profile, company, position, email, comment
  } = user

  const url = profile || DEFAULT_IMAGE

  return (
    <div className={styles.container}>
      <img className={styles.img} src={require('../../images/default_logo.png')} alt="logo"/>
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
}

export default Card;