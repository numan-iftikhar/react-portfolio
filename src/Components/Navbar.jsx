import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <section className="nav-wrapper">
      <div className="nav-left">
        <div className="nav-name">Numan</div>
        <span>toggle</span>
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
