import React from "react";
import styles from "./Card.module.scss";
import placeholder from "../../resources/images/placeholder.svg";

const Card = (props) => {
  return (
    <div className={styles.Card}>
      <h4>{props.title}</h4>
      {props.image ? (
        <img src={props.image} alt={props.title} />
      ) : (
          <img src={placeholder} alt={props.title} />
        )}
    </div>
  );
};

export default Card;
