import React from "react";
import styles from "./Card.module.css";
import Logo from "../../../assets/logo.png";
const Card = ({ title, icon, children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.headingWrapper}>
        <img src={icon} alt={"logo"} height="25" />
        <h1 className={styles.heading}>{title}</h1>
      </div>
      {children}
    </div>
  );
};

export default Card;
