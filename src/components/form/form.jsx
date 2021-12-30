import React from 'react';
import { useRef } from 'react';
import styles from './form.module.css'

const Form = ({user, createOrEdit, deleteCard}) => {
  const {
    name, company, position, email, comment, color
  } = user

  const nameRef = useRef() 
  const companyRef = useRef() 
  const colorRef = useRef()
  const positionRef = useRef() 
  const emailRef = useRef() 
  const commentRef = useRef() 

  const onChange = event => {
    if (event.currentTarget == null) {
      return
    }
    event.preventDefault()
    createOrEdit({
      ...user,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const onDelete = event => {
    if (event.currentTarget == null) {
      return
    }
    event.preventDefault()
    deleteCard(user)
  }

  return (
    <form className={styles.container}>
      <input 
        className={`${styles.input} ${styles.name}`} 
        type="text"
        name="name" 
        ref={nameRef}
        value={name}
        onChange={onChange}/>
      <input 
        className={`${styles.input} ${styles.company}`} 
        type="text" 
        name="company" 
        ref={companyRef}
        value={company}
        onChange={onChange}/>
      <select 
        className={`${styles.select} ${styles.color}`} 
        name="color" 
        ref={colorRef}
        value={color}
        onChange={onChange}>
          <option>dark</option>
          <option>blue</option>
          <option>purple</option>
      </select>
      <input 
        className={`${styles.input} ${styles.position}`} 
        type="text" 
        name="position" 
        ref={positionRef}
        value={position}
        onChange={onChange}/>
      <input 
        className={`${styles.input} ${styles.email}`} 
        type="text" 
        name="email" 
        ref={emailRef}
        value={email}
        onChange={onChange}/>
      <textarea 
        className={styles.comment} 
        type="text" 
        ref={commentRef}
        value={comment}
        onChange={onChange}/>
      <div className={styles.btn}>
        <button className={styles.btnImage} onClick={() => {}}>Image</button>
        <button className={styles.btnDelete} onClick={onDelete}>Delete</button>
      </div>
    </form>
  )
}

export default Form;