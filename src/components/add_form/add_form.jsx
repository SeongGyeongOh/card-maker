import React from 'react';
import styles from './add_form.module.css'

const AddForm = ({makeCard}) => {
  return (
    <form className={styles.container} onChange={() => {}}>
      <input 
        className={`${styles.input} ${styles.name}`} 
        type="text" name="name" 
        placeholder='name'/>
      <input 
        className={`${styles.input} ${styles.company}`} 
        type="text" name="company" 
        placeholder='company'/>
      <select 
        className={`${styles.select} ${styles.color}`} 
        name="color" >
          <option>dark</option>
          <option>blue</option>
          <option>purple</option>
      </select>
      <input 
        className={`${styles.input} ${styles.position}`} 
        type="text" name="position" 
        placeholder='position'/>
      <input 
        className={`${styles.input} ${styles.email}`} 
        type="text" name="email" 
        placeholder='email'/>
      <textarea 
        className={styles.comment} 
        type="text" 
        placeholder='leave your comment'/>
      <div className={styles.btn}>
        <button className={styles.btnImage} onClick={() => {}}>Image</button>
        <button className={styles.btnAdd} onClick={() => makeCard(
          // {id: 4, name: 'ddd', profile: null, company: 'AAA.corporation', position: 'Engineer', email: 'aaa@aaa.com', comment: 'know that the pain will pass', color: ['dark', 'blue', 'purple']},
        )}>Add</button>
      </div>
    </form>
  )
}

export default AddForm;