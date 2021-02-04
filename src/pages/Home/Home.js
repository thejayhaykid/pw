import React from "react";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import pwGenIcon from "../../resources/images/pwGenIcon.svg";

const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.header}>Jake Hayes' Utilities</h1>
      <div className={styles.cards}>
        <Link to="/pw">
          <Card title="Password Generator" image={pwGenIcon} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
