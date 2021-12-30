import React, { memo } from 'react';
import AddForm from '../add_form/add_form';
import Form from '../form/form';
import styles from './card_maker.module.css'

const CardMaker = memo(({users, makeCard}) => {
  return(
    <section className={styles.container}>
      <h1 className={styles.title}>Card Maker</h1>
      {
        // console.log(users)
        users.map(user => {
          return <Form user={user} key={user.id}/>
        })
      }
      <AddForm makeCard={makeCard}/>
    </section>
  )
})

export default CardMaker;