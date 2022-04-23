import React, { memo } from "react";
import { useState } from "react";
import { useRef } from "react";
import styles from "./add_form.module.css";

const AddForm = memo(({ makeCard, FileInput }) => {
  const inputName = useRef();
  const inputCompany = useRef();
  const inputPosition = useRef();
  const inputEmail = useRef();
  const inputComment = useRef();
  const inputColor = useRef();
  const formRef = useRef();
  const [file, setFile] = useState({ fileName: null, profile: null });

  const addCard = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(),
      name: inputName.current.value || "",
      company: inputCompany.current.value || "",
      position: inputPosition.current.value || "",
      email: inputEmail.current.value || "",
      comment: inputComment.current.value || "",
      color: inputColor.current.value || "",
      profile: file.profile || "",
      fileName: file.fileName || "",
    };
    formRef.current.reset();
    setFile({ fileName: null, profile: null });
    makeCard(card);
  };

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      profile: file.url,
    });
  };

  return (
    <form className={styles.container} ref={formRef}>
      <input
        ref={inputName}
        className={`${styles.input} ${styles.name}`}
        type="text"
        name="name"
        placeholder="name"
      />
      <input
        ref={inputCompany}
        className={`${styles.input} ${styles.company}`}
        type="text"
        name="company"
        placeholder="company"
      />
      <select
        className={`${styles.select} ${styles.color}`}
        name="color"
        ref={inputColor}
      >
        <option>dark</option>
        <option>blue</option>
        <option>purple</option>
      </select>
      <input
        ref={inputPosition}
        className={`${styles.input} ${styles.position}`}
        type="text"
        name="position"
        placeholder="position"
      />
      <input
        ref={inputEmail}
        className={`${styles.input} ${styles.email}`}
        type="text"
        name="email"
        placeholder="email"
      />
      <textarea
        ref={inputComment}
        className={styles.comment}
        type="text"
        placeholder="leave your comment"
      />
      <div className={styles.btn}>
        <FileInput onFileChange={onFileChange} fileName={file.fileName} />
        <button className={styles.btnAdd} onClick={addCard}>
          Add
        </button>
      </div>
    </form>
  );
});

export default AddForm;
