import React, { memo } from 'react';
import Card from '../card/card';
import styles from './card_preview.module.css'

const CardPreview = memo(({users}) => {
  return(
    <section className={styles.container}>
      <h1 className={styles.title}>Card Preview</h1>
      {
        users && users.map(user => {
          return <Card user={user} key={user.id}/>
        })
      }
    </section>
  )
})

export default CardPreview;