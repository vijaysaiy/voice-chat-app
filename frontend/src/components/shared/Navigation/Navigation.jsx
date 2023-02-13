import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const brandStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "22px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40px",
    gap: "10px",
  };

  return (
    <nav className={`container ${styles.navbar}`}>
      <Link to="/" style={brandStyle}>
        <img src={Logo} alt="Logo" height="25" />
        <span>Coder's House</span>
      </Link>
    </nav>
  );
};

export default Navigation;
