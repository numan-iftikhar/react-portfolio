import FloatingDiv from "./FloatingDiv";
import React from "react";
import "./Intro.css";
import github from "../../src/img/github.png";
import linkedin from "../../src/img/linkedin.png";
import instagram from "../../src/img/instagram.png";
import vector1 from "../../src/img/vector1.png";
import vector2 from "../../src/img/vector2.png";
import boy from "../../src/img/boy.png";
import thumbup from "../../src/img/thumbup.png";
import crown from "../../src/img/crown.png";
import glassesimoji from "../../src/img/glassesimoji.png";
import { motion } from "framer-motion";
import { themeContext } from "../context.js";
import { useContext } from "react";

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = {
    duration: 2,
    type: "spring",
  };

  return (
    <section id="intro">
      <div className="i-left">
        <span style={{ color: darkMode ? "white" : "" }}>Hi!, I'm</span>
        <span>Numan Iftikhar</span>
        <p style={{ color: darkMode ? "white" : "" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam alias
          quasi, cum quisquam voluptate nihil? Ab ex ducimus dolorum! Culpa.
        </p>
        <button className="button">Hire me!</button>

        <div className="i-icons">
          <img src={github} alt="" />
          <img src={linkedin} alt="" />
          <img src={instagram} alt="" />
        </div>
      </div>

      {/* intro right side */}
      <div className="i-right">
        <img src={vector1} alt="" />
        <img src={vector2} alt="" />
        <img src={boy} alt="" />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "64%" }}
          transition={transition}
          className="crown"
        >
          <FloatingDiv img={crown} txt1={"Web"} txt2={"Developer"} />
        </motion.div>

        <motion.div
          initial={{ left: "-6%" }}
          whileInView={{ left: 0, top: "18.3rem" }}
          transition={transition}
          className="thumb"
        >
          <FloatingDiv img={thumbup} txt1={"Best Design"} txt2={"Award"} />
        </motion.div>

        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
          className="emoji"
        />
      </div>
    </section>
  );
};

export default Intro;
