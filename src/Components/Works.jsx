import React from "react";
import "./Works.css";
import amazon from "../img/amazon.png";
import fiverr from "../img/fiverr.png";
import shopify from "../img/Shopify.png";
import facebook from "../img/Facebook.png";
import upwork from "../img/Upwork.png";

function Works() {
  return (
    <section id="works">
      <div className="left s-awesome">
        <span>Works for All these</span>
        <span>Brands and Clients</span>
        <p>
          repellat facilis sed vero cumque. In.
          <br />
          repellat facilis sed vero cumque. In.
          <br />
          repellat facilis sed vero cumque. In.
          <br />
          repellat facilis sed vero cumque. In.
        </p>

        <button className="button s-btn">Hire Me!</button>
      </div>

      {/* right side */}
      <div className="w-pri-circle">
        <div className="w-sec-circle">
          <img src={amazon} alt="" />
        </div>
        <div className="w-sec-circle">
          <img src={facebook} alt="" />
        </div>
        <div className="w-sec-circle">
          <img src={shopify} alt="" />
        </div>
        <div className="w-sec-circle">
          <img src={fiverr} alt="" />
        </div>
        <div className="w-sec-circle">
          <img src={upwork} alt="" />
        </div>
      </div>
      <div className="wBackCircle">
        <div className="blueCircle"></div>
        <div className="yellowCircle"></div>
      </div>
    </section>
  );
}

export default Works;
