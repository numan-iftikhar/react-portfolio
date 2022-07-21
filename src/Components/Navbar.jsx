import React from "react";
import "./Navbar.css";
import Toggle from "./Toggle";

function Navbar() {
  return (
    <section className="nav-wrapper">
      <div className="nav-left">
        <div className="nav-name">Numan</div>
        <Toggle />
      </div>

      <div className="nav-right">
        <div className="nav-list">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Testimonial</li>
          </ul>
        </div>
        <button className="button">Contact</button>
      </div>
    </section>
  );
}

export default Navbar;
