import React from "react";
import styles from "./Home.module.css";
import Logo from "../../assets/logo.png";
import arrowForward from "../../assets/arrow.png";
import Card from "../../components/shared/Card/Card";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/shared/Button/Button";

const Home = () => {
  const signInLinkStyle = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
  };

  const navigate = useNavigate();

  const startRegister = () => {
    navigate("/authenticate");
  };

  return (
    <div className={styles.cardWrapper}>
      <Card title={"Welcome to Codershouse!"} icon={Logo}>
        <p className={styles.text}>
          We’re working hard to get Codershouse ready for everyone! While we
          wrap up the finishing youches, we’re adding people gradually to make
          sure nothing breaks
        </p>
        <div>
          <Button onClick={startRegister} text="Let's go" icon={arrowForward} />
          <div className={styles.sigininWrapper}>
            <span className={styles.hasInvite}>Have an invite text?</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;
