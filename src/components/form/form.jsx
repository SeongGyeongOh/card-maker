import React from 'react';
import styles from './form.module.css'

const Form = ({user}) => {
  const {
    name, company, position, email, comment, color
  } = user

  return (
    <form className={styles.container} onChange={() => {}}>
      <input 
        className={`${styles.input} ${styles.name}`} 
        type="text"
        name="name" 
        value={name}/>
      <input 
        className={`${styles.input} ${styles.company}`} 
        type="text" name="company" 
        value={company}/>
      <select 
        className={`${styles.select} ${styles.color}`} 
        name="color" 
        value={color}
        onChange={()=> {}}>
          <option>dark</option>
          <option>blue</option>
          <option>purple</option>
      </select>
      <input 
        className={`${styles.input} ${styles.position}`} 
        type="text" name="position" 
        value={position}/>
      <input 
        className={`${styles.input} ${styles.email}`} 
        type="text" name="email" 
        value={email}/>
      <textarea 
        className={styles.comment} 
        type="text" 
        value={comment}/>
      <div className={styles.btn}>
        <button className={styles.btnImage} onClick={() => {}}>Image</button>
        <button className={styles.btnDelete} onClick={() => {}}>Delete</button>
      </div>
    </form>
  )
}

export default Form;