import React from "react";

import s from "./Driver.module.css";
import Drive from "../../images/drive.png";

const Driver = () => {
  return (
    <div className={s.driver}>
      <div className={s.left}>
        <img src={Drive} alt="/" />
      </div>
    </div>
  );
};

export default Driver;
