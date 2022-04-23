import React, { memo } from "react";
import Card from "../card/card";
import styles from "./card_preview.module.css";

const CardPreview = ({ users }) => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Card Preview</h1>
      {users &&
        Object.keys(users).map((key) => <Card key={key} user={users[key]} />)}
    </section>
  );
};

export default CardPreview;
