import React from "react";
import styles from "./Button.module.css";


const Button = ({ text, icon, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <span>{text}</span>
      <img src={icon} alt="arrow" />
    </button>
  );
};

export default Button;
