import React from "react";
// requires a loader
import { Carousel } from "react-responsive-carousel";

import img1 from "../Assets/8.jpg.jpeg";
import img2 from "../Assets/9.jpg.jpeg";
import img3 from "../Assets/7.jpg.jpeg";
const InsideCarousel = () => {
  return (

    
    <div className="inside-carousel ">
      <img src={img1} className="inside-img" />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, eveniet
        sint vitae totam consequuntur possimus? Nisi placeat, amet mollitia
        incidunt ullam velit ratione maxime consequuntur est corporis voluptate?
        Omnis, maiores.
      </p>
    </div>
  );
};

export default InsideCarousel;
