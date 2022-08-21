import React from "react";

import s from "./Footer.module.css";
import Logo from "../../images/logo_dark.png";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <img src={Logo} alt="/" />
        <button>Share a car</button>
      </div>
    </footer>
  );
};

export default Footer;
