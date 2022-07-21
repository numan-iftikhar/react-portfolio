import React from "react";
import "./Experience.css";
import { themeContext } from "../context.js";
import { useContext } from "react";

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section id="experience">
      <div className="achievement">
        <div style={{color: darkMode? "var(--black)": ''}} className="circle">8+</div>
        <span>Years</span>
        <span>Experience</span>
      </div>

      <div className="achievement">
        <div style={{color: darkMode? "var(--black)": ''}} className="circle">20+</div>
        <span>Completed</span>
        <span>Projects</span>
      </div>

      <div className="achievement">
        <div style={{color: darkMode? "var(--black)": ''}} className="circle">5+</div>
        <span>Worked</span>
        <span>Companies</span>
      </div>
    </section>
  );
};

export default Experience;
