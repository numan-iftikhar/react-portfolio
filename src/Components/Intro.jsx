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

const Intro = () => {
  return (
    <section id="intro">
      <div className="i-left">
        <span>Hi!, I'm</span>
        <span>Numan Iftikhar</span>
        <p>
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

      <div className="i-right">
        <img src={vector1} alt="" />
        <img src={vector2} alt="" />
        <img src={boy} alt="" />
        <div className="crown">
          <FloatingDiv img={crown} txt1={"Web"} txt2={"Developer"} />
        </div>
        <div className="thumb">
          <FloatingDiv img={thumbup} txt1={"Best Design"} txt2={"Award"} />
        </div>

        <img src={glassesimoji} alt="" className="emoji" />
      </div>
    </section>
  );
}

export default Intro;
