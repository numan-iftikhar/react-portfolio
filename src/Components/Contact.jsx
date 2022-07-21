import React from "react";
import "./Contact.css";
import { themeContext } from "../context.js";
import { useContext } from "react";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section id="contact">
      <div className="cLeft">
        <div className="awesome">
          <span style={{color: darkMode? "white": ''}}>Get in touch</span>
          <br />
          <span>Contact me</span>
        </div>
      </div>

      <div className="cRight">
        <form action="#">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="iField"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="iField"
          />
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            className="iField"
          ></textarea>
          <input type="sumbit" value="send" className="button" />
          <div className="blur cBlur2" style={{ background: "skyblue" }}></div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
