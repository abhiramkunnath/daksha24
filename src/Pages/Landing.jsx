import React from "react";

import "./Landing.scss";
import DakshaFont from "../assets/DakshaFont.svg";

function Landing() {
  return (
    <div className="Landing">
      <section className="Hero">
        <p>ADVAYA COLLEGE UNION PRESENTS</p>
        <img src={DakshaFont} alt="Daksha" />
        <h4>ARTS FEST</h4>
        <p className="month">MARCH</p>
        <h3>5 6 7</h3>
        <p>GEC PALAKKAD</p>
        <a href="">See Guidelines</a>
      </section>
    </div>
  );
}

export default Landing;
