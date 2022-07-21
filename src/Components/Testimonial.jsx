import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "./Testimonial.css";
import "swiper/css/pagination";
import "swiper/css";
import profile1 from "../img/profile1.jpg";
import profile2 from "../img/profile2.jpg";
import profile3 from "../img/profile3.jpg";
import profile4 from "../img/profile4.jpg";
import { themeContext } from "../context.js";
import { useContext } from "react";

const Testimonial = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const clients = [
    {
      img: profile1,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas esse laudantium id pariatur voluptates ad, accusantium nam porro unde voluptatibus? Molestias, error quibusdam distinctio voluptate eveniet quis eaque sequi dicta?",
    },
    {
      img: profile2,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas esse laudantium id pariatur voluptates ad, accusantium nam porro unde voluptatibus? Molestias, error quibusdam distinctio voluptate eveniet quis eaque sequi dicta?",
    },
    {
      img: profile3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas esse laudantium id pariatur voluptates ad, accusantium nam porro unde voluptatibus? Molestias, error quibusdam distinctio voluptate eveniet quis eaque sequi dicta?",
    },
    {
      img: profile4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas esse laudantium id pariatur voluptates ad, accusantium nam porro unde voluptatibus? Molestias, error quibusdam distinctio voluptate eveniet quis eaque sequi dicta?",
    },
  ];

  return (
    <section id="testimonial">
      <div className="tHeading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>From Me !!</span>

        {/* blur divs */}
        <div
          className="blur tBlur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur tBlur2" style={{ background: "skyblue" }}></div>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <p style={{color: darkMode? "white": ''}}>{client.review}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
