import React from "react";

import s from "./Luxury.module.css";

const Luxury = () => {
  return (
    <div className={s.luxury}>
      <div className={s.heading}>
        <h2>Luxury Selection</h2>
        <div className={s.textBg}>
          <p>
            <span>Select from the top luxury vehicles to roll in style</span>
          </p>
        </div>
      </div>
      <div className={s.container}>
        <div className={s.card}>
          <img
            src="https://images.unsplash.com/photo-1599912027611-484b9fc447af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
            alt="/"
          />
          <div className={s.content}>
            <h3>Rolls</h3>
          </div>
        </div>

        <div className={s.card}>
          <img
            src="https://images.unsplash.com/photo-1592853625601-bb9d23da12fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="/"
          />
          <div className={s.content}>
            <h3>Porsha</h3>
          </div>
        </div>

        <div className={s.card}>
          <img
            src="https://images.unsplash.com/photo-1535448580089-c7f9490c78b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1321&q=80"
            alt="/"
          />
          <div className={s.content}>
            <h3>Lamba</h3>
          </div>
        </div>

        <div className={s.card}>
          <img
            src="https://images.unsplash.com/photo-1555338371-67d1d00c56e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80"
            alt="/"
          />
          <div className={s.content}>
            <h3>Ferrary</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Luxury;
