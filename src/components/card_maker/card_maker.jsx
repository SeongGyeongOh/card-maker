import React from 'react';
import AddForm from '../add_form/add_form';
import Form from '../form/form';
import styles from './card_maker.module.css'

const CardMaker = ({users, createOrEdit, deleteCard, FileInput}) => {
  return(
    <section className={styles.container}>
      <h1 className={styles.title}>Card Maker</h1>
      {Object.keys(users).map(key => (
          <Form 
            key={key} 
            user={users[key]} 
            createOrEdit={createOrEdit} 
            deleteCard={deleteCard}
            FileInput={FileInput}
          />
        ))
      }
      <AddForm 
        makeCard={createOrEdit}
        FileInput={FileInput}
      /> 
    </section>
  )
}

export default CardMaker;