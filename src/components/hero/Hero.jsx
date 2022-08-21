import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import s from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={s.hero}>
      <form action="">
        <div className={s.text}>
          <label htmlFor="">Where</label>
          <input
            className={s.textInput}
            type="text"
            placeholder="Search Location"
          />
        </div>
        <div className={s.from}>
          <span className={s.border}></span>
          <label htmlFor="">From</label>
          <input type="date" />
        </div>
        <div className={s.until}>
          <label htmlFor="">Until</label>
          <input type="date" />
        </div>
        <div className={s.searchBtn}>
          <AiOutlineSearch className={s.icon} />
          <button className={s.btn}>Search for cars</button>
        </div>
      </form>
    </div>
  );
};

export default Hero;
