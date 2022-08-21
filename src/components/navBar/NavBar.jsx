import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";

import s from "./NavBar.module.css";
import Logo from "../../images/logo.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className={s.navBar}>
      <img src={Logo} alt="/" />
      <nav>
        {" "}
        <ul className={nav ? [s.menu, s.active].join() : [s.menu]}>
          <li>
            <a href="/">Learn More</a>
          </li>
          <li>
            <a href="/">Log in</a>
          </li>
          <li>
            <a href="/">Sing up</a>
          </li>
          <li>
            <AiOutlineSearch size={25} style={{ marginTop: "6px" }} />
          </li>
          <li>
            <AiOutlineUser size={25} style={{ marginTop: "6px" }} />
          </li>
        </ul>
      </nav>
      <div className={s.modalBtn} onClick={() => setNav(!nav)}>
        {" "}
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
    </header>
  );
};

export default NavBar;
