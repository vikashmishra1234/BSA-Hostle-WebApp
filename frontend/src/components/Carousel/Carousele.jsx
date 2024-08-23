import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../style/style1.scss";
// import img1 from "../Assets/8.jpg.jpeg";
// import img2 from "../Assets/9.jpg.jpeg";
// import img3 from "../Assets/7.jpg.jpeg";
const Carousele = () => {
  return (
    <div className="carousel-container">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        interval={4000}
        emulateTouch={true}
       swipeable={true}
        infiniteLoop={true}
        key={Math.random()}
       
      >
        <div className="img-container">
          <img src='https://www.bsacet.org/wp-content/uploads/2024/03/bsa-1.jpeg' className="img" />
        </div>
        <div className="img-container">
          <img src='https://www.bsacet.org/wp-content/uploads/2024/03/bsa-2.jpeg' className="img" />
        </div>
        <div className="img-container">
          <img src='https://www.bsacet.org/wp-content/uploads/2024/03/bsa-3.jpeg' className="img" />
        </div>
        <div>
          <img src='https://www.bsacet.org/wp-content/uploads/2024/03/bsa-4.jpeg' className="img" />
        </div>
        <div>
          <img src='https://www.bsacet.org/wp-content/uploads/2024/03/bsa-5.jpeg' className="img" />
        </div>
      </Carousel>
    </div>
  );
};

export default Carousele;
