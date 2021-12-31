import styles from './image_button.module.css'

import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { memo } from 'react';

const ImageButton = memo(({imageUploader, fileName, onFileChange}) => {  
  const [loading, setLoading] = useState(false)
  const inputRef = useRef()

  const onButtonClick = event => {
    event.preventDefault()
    inputRef.current.click() 
  }

  const onChange = async event => {
    setLoading(true)
    const uploadedFile = await imageUploader.upload(event.target.files[0])
    setLoading(false)
      
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
      {!loading && (
        <button className={`${styles.btn} ${fileName ? styles.pink : styles.grey}`} onClick={onButtonClick}>
        { fileName || "No File" }
        </button>
      )}
      {
        loading && <div className={styles.loading}></div>
      }
    </div>
  )
})

export default ImageButton;