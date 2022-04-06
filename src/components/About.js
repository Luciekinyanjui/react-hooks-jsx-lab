import React from "react";
import { image } from "../data/data";

function About() {
  return <div>About</div>;

  return(
  <div id="about">
    <h2>About Me</h2>
    <p>Checkout what I made</p>
    <img src={image} alt="My Image"></img>
  </div>
);
  }
export default About;
