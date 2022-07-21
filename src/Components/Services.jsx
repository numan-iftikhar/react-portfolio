import React from "react";
import Card from "./Card";
import "./Services.css";
import heartemoji from "../img/heartemoji.png";
import humble from "../img/humble.png";
import glasses from "../img/glasses.png";
import { motion } from "framer-motion";
import { themeContext } from "../context.js";
import { useContext } from "react";

function Services() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = {
    duration: 2,
    type: "spring",
  };

  return (
    <section id="services">
      <div className="left s-awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <p>
          Lorem ipsum dolor sit amet veniam voluptatem aliquid deserunt <br />
          repellat facilis sed vero cumque. In.
        </p>

        <button className="button s-btn">Download CV</button>
      </div>

      {/* services right side */}
      <div className="s-cards">
        <motion.div
          initial={{ left: "4rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ top: "8rem", left: "13rem" }}
        >
          <Card
            emoji={heartemoji}
            heading={"Design"}
            detail={"Lorem ipsum dolor sit amet consectetur adipisicing"}
          />
        </motion.div>

        <motion.div
          initial={{ left: "-2rem" }}
          whileInView={{ left: "-6rem" }}
          transition={transition}
          style={{ right: "-8rem", top: "19rem" }}
        >
          <Card
            emoji={glasses}
            heading={"Developer"}
            detail={"Lorem ipsum dolor sit amet consectetur adipisicing"}
          />
        </motion.div>

        <motion.div
          initial={{ right: "0" }}
          whileInView={{ left: "11rem" }}
          transition={transition}
          style={{ top: "28rem", left: "7rem" }}
        >
          <Card
            emoji={humble}
            heading={"UI/UX"}
            detail={"Lorem ipsum dolor sit amet consectetur adipisicing"}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
