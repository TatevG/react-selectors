import React from "react";
import background from "./background.jpg";
import "./SlideShow.css";

const SlideShow = () => (
  <div
    className="slideshow"
    style={{ backgroundImage: `url(${background})` }}
  />
);

export default SlideShow;
