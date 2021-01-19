import React from "react";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";

const Home = () => {
  return (
    <div>
      <h1 className={styles.header}>Home</h1>
      <div>
        <Link to="/pw">
          <Card></Card>
        </Link>
      </div>
    </div>
  );
};

export default Home;
