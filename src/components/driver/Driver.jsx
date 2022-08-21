import React from "react";

import s from "./Driver.module.css";
import Drive from "../../images/drive.png";

const Driver = () => {
  return (
    <div className={s.driver}>
      <div className={s.left}>
        <img src={Drive} alt="/" />
      </div>
      <div className={s.right}>
        <h2>
          Find your perfect car <span>to try before you buy</span>
        </h2>
        <p>
          Make sure your future wheels work well with your lifestyle by taking
          your time in the drivers seat.
        </p>
        <button>Browser Cars</button>
      </div>
    </div>
  );
};

export default Driver;
