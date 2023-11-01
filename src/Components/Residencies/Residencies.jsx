import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "Swiper/react";
import "Swiper/swiper.css";
import "./Residencies.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText"> Best Choices</span>
          <span className="primaryText">Popular Residence</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="r-card flexColStart ">
                <img src={item.image} alt="home" />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{item.price}</span>
                </span>
                <span className="primaryText">{item.name}</span>
                <span className="secondaryText">{item.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;
Residencies;
const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="r-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
