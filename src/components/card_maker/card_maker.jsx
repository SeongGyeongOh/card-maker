import React, { memo } from 'react';
import AddForm from '../add_form/add_form';
import Form from '../form/form';
import styles from './card_maker.module.css'

const CardMaker = memo(({users, createOrEdit, deleteCard}) => {
  return(
    <section className={styles.container}>
      <h1 className={styles.title}>Card Maker</h1>
      {
        // console.log(users)
        Object.keys(users).map(key => (
          <Form 
            key={key} 
            user={users[key]} 
            createOrEdit={createOrEdit} 
            deleteCard={deleteCard}/>
        ))
      }
      <AddForm makeCard={createOrEdit}/>
    </section>
  )
})

export default CardMaker;