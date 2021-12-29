import React from 'react';
import Form from '../form/form';
import styles from './card_maker.module.css'

const CardMaker = ({users}) => 
<section className={styles.container}>
  <h1 className={styles.title}>Card Maker</h1>
  {
    users.map(user => {
      return <Form user={user} key={user.id}/>
    })
  }
</section>

export default CardMaker;