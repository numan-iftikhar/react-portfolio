import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import sidebar from "../img/sidebar.png";
import ecommerce from "../img/ecommerce.png";
import hoc from "../img/hoc.png";
import musicapp from "../img/musicapp.png";
import "swiper/css";
import { themeContext } from "../context.js";
import { useContext } from "react";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section id="portfolio">
      <span style={{color: darkMode? "white": ''}} className="h1">Recent Projects</span>
      <span className="h2">Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={musicapp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hoc} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Portfolio;
