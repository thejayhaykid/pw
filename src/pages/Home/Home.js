import React from "react";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";

const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.header}>Utilities</h1>
      <div>
        <Link to="/pw">
          <Card title="Password Generator" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
