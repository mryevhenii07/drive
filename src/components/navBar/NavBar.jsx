import React from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AioutlinePerson } from 'react-icons/ai';

import s from './NavBar.module.css';
import Logo from '../../images/logo.png';

const NavBar = () => {
  return (
    <header className={s.navBar}>
      <img src={Logo} alt="/" />
    </header>
  );
};

export default NavBar;
