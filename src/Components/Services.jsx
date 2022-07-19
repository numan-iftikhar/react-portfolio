import React from "react";
import Card from "./Card";
import "./Services.css";
import heartemoji from "../img/heartemoji.png";
import humble from "../img/humble.png";
import glasses from "../img/glasses.png";

function Services() {
  return (
    <section id="services">
      <div className="left s-awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <p>
          Lorem ipsum dolor sit amet veniam voluptatem aliquid deserunt <br />{" "}
          repellat facilis sed vero cumque. In.
        </p>

        <button className="button s-btn">Download CV</button>
      </div>

      <div className="s-cards">
        <div style={{ top: "8rem", left: "13rem" }}>
          <Card
            emoji={heartemoji}
            heading={"Design"}
            detail={"Lorem ipsum dolor sit amet consectetur adipisicing"}
          />
        </div>

        <div style={{ right: "-8rem", top: "19rem" }}>
          <Card
            emoji={glasses}
            heading={"Developer"}
            detail={"Lorem ipsum dolor sit amet consectetur adipisicing"}
          />
        </div>

        <div style={{ top: "28rem", left: "11rem" }}>
          <Card
            emoji={humble}
            heading={"UI/UX"}
            detail={"Lorem ipsum dolor sit amet consectetur adipisicing"}
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
