import React from "react";
import "./Footer.css";
import wave from "../img/wave.png";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <section id="footer">
      <img src={wave} alt="" style={{ width: "100%" }} />
      <div className="fContent">
        <span>numaniftikhar300@gmail.com</span>
        <div className="fIcons">
          <Instagram color="white" size="3rem" />
          <Facebook color="white" size="3rem" />
          <Github color="white" size="3rem" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
