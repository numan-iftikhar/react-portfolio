import React from "react";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import "./Toggle.css";
import { useContext } from "react";
import { themeContext } from "../context";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const toggleClick = () => {
    theme.dispatch({ type: "toggle" });
  };

  return (
    <div className="toggle" onClick={toggleClick}>
      <Moon />
      <Sun />
      <div
        className="btnToggle"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
