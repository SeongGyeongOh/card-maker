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
        type="text" name="name" 
        placeholder={name}/>
      <input 
        className={`${styles.input} ${styles.company}`} 
        type="text" name="company" 
        placeholder={company}/>
      <select 
        className={`${styles.select} ${styles.color}`} 
        name="color" 
        value={color}>
          <option defaultValue={color[0]}>{color[0]}</option>
          <option>{color[1]}</option>
          <option>{color[2]}</option>
      </select>
      <input 
        className={`${styles.input} ${styles.position}`} 
        type="text" name="position" 
        placeholder={position}/>
      <input 
        className={`${styles.input} ${styles.email}`} 
        type="text" name="email" 
        placeholder={email}/>
      <textarea 
        className={styles.comment} 
        type="text" 
        placeholder={comment}/>
      <div className={styles.btn}>
        <button className={styles.btnImage} onClick={() => {}}>Image</button>
        <button className={styles.btnDelete} onClick={() => {}}>Delete</button>
      </div>
    </form>
  )
}

export default Form;