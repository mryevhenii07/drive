import React from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AioutlinePerson,
} from "react-icons/ai";

import s from "./NavBar.module.css";
import Logo from "../../images/logo.png";

const NavBar = () => {
  return (
    <header className={s.navBar}>
      <img src={Logo} alt="/" />
      <ul className={s.menu}>
        <li>
          <a href="/">Learn More</a>
        </li>
        <li>
          <a href="/">Log in</a>
        </li>
        <li>
          <a href="/">Sing up</a>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
