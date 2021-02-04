import React from "react";
import { Link } from "react-router-dom";
import styles from './NoMatch.module.scss';

const NoMatch = () => {
  return (
    <div className={styles.fourOFour}>
      <h1>Looks like you're lost</h1>
      <Link to="/">Return Home</Link>
    </div>
  );
};

export default NoMatch;
