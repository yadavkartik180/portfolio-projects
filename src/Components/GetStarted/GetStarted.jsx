import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter innerContainer">
          <span className="primaryText">Get started with Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us. <br />
            Find your residence soon
          </span>
          <span>
            <button className="button">
              <a href="mailto:yadavkartik180@gmail.com">Get Started</a>
            </button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
