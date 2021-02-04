import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = () => {
  const loc = useLocation();
  console.log(`Location ${JSON.stringify(loc)}`)

  return (
    <div className={styles.Nav}>
      <nav>
        <ul className={styles.navItems}>
          <li className={`${styles.navItem} ${loc.pathname === "/" ? styles.active : null}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`${styles.navItem} ${loc.pathname === "/pw" ? styles.active : null}`}>
            <Link to="/pw">Password Generator</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
