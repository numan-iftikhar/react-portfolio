import React from "react";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Services from "./Components/Services";
import "./App.css";
import Experience from "./Components/Experience";
import Works from "./Components/Works";
import Portfolio from "./Components/Portfolio";
import Testimonial from "./Components/Testimonial";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
    </div>
  );
}

export default App;
