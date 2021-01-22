import React from "react";
import styles from './Card.module.scss';

const Card = (props) => {
  return <div className={styles.Card}><h4>{props.title}</h4></div>;
};

export default Card;
