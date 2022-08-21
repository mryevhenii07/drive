import React from "react";

import s from "./Find.module.css";

const Card = ({ image, make }) => {
  return (
    <div className={s.card}>
      <img src={image} alt="" />
      <p>{make}</p>
    </div>
  );
};

export default Card;
