import styles from './image_button.module.css'

import React from 'react';
import { useRef } from 'react';

const ImageButton = ({imageUploader, fileName, onFileChange}) => {  
  const inputRef = useRef()

  const onButtonClick = event => {
    event.preventDefault()
    inputRef.current.click() 
  }

  const onChange = async event => {
    console.log(event.target.files[0])
    const uploadedFile = await imageUploader
      .upload(event.target.files[0])
      
      console.log(uploadedFile)
      
      onFileChange({
        name: uploadedFile.original_filename,
        url: uploadedFile.url
      })
  }

  return (
    <div className={styles.container}>
      <input 
        className={styles.input} 
        type="file" 
        accept='image/*' 
        name='file'
        ref={inputRef}
        onChange={onChange}
      />
      <button className={styles.btn} onClick={onButtonClick}>
        { fileName || "No File" }
      </button>
    </div>
  )
}

export default ImageButton;