import React/*, { useState }*/ from "react";
import styles from './passwordGenerator.module.scss';

const PasswordGenerator = () => {
  // const [lowers, updateLowers] = useState(true);
  // const [uppers, updateUppers] = useState(true);
  // const [numbers, updateNumbers] = useState(true);
  // const [symbols, updateSymbols] = useState(true);
  // const [allowedSymbols, updateAllowedSymbols] = useState(
  //   ".,/?<>[]{};:'\"`!~@#$%^&*()-_=+\\|"
  // );
  // const [desiredLength, updateDesiredLength] = useState(20);

  return (
    <div className={styles.generator}>
      <h1>Password Generator</h1>
      <h3>Still under construction</h3>
    </div>
  );
};

export default PasswordGenerator;
