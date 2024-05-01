import React from "react";
import img from "../Assets/7.jpg.jpeg";
import "../style/style1.scss";
import { AnimateText } from "./AnimateText";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const About = () => {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/about");
  };

  


  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };
  const imageVariants = {
    hidden: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, ease: "easeInOut" },
  };
  const bottomUp = {
    initial: { opacity: 0, y: 0 },
    animate: { opacity: 1, y: 0 },
  };
  const leftFade = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <div className="about-container stars">
      <motion.h2
        initial="initial"
        whileInView="animate"
        variants={bottomUp}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        BSA Hostle: A Safe Heaven
        <motion.hr
          color="antiquewhite"
          style={{ height: "1px" }}
          initial={{ width: "0%", opacity: 0 }}
          whileInView={{ width: "60%", opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 1.6 }}
        />
      </motion.h2>
      <section className="section-1">
        <motion.h3
          initial="initial"
          whileInView="animate"
          variants={bottomUp}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          About Us
        </motion.h3>
        <div className="image-about-container">
          <motion.img
            initial="hidden"
            whileInView="animate"
            variants={imageVariants}
            transition={{ duration: 1 }}
            src="https://www.bsacet.org/wp-content/uploads/2023/11/MBA1-scaled.jpg"
            alt=""
          />

          <motion.p
            initial="hidden"
            whileInView="reveal"
            transition={{ staggerChildren: 0.02 }}
          >
          At BSA Hostle, we believe in more than just providing a place to stay.
  We're committed to creating an unforgettable experience for every
  guest who walks through our doors. Nestled in Near New Bus Stand
  ,Mathura, our hostel combines comfort, affordability, and a vibrant
  community atmosphere to make your stay truly memorable.
          </motion.p>

          <motion.div
            initial="initial"
            whileInView="animate"
            variants={leftFade}
            transition={{ duration: 2, ease: "easeOut" }}
            style={{ textAlign: "left" }}
          >
            <button onClick={handleClick}>Read More</button>
          </motion.div>
        </div>
      </section>
      <section className="section-2">
        <motion.h3
          initial="initial"
          whileInView="animate"
          variants={bottomUp}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          Latest News
        </motion.h3>
        <marquee direction="up" behavior="scroll" scrollamount="2">
          <div className="scroll">
            <h1>Addmission are open Book your seat now</h1>
          </div>
          <div className="scroll">
            <h1>Addmission are open Book your seat now</h1>
          </div>
          <div className="scroll">
            <h1>Addmission are open Book your seat now</h1>
          </div>
        </marquee>
      </section>
    </div>
  );
};

export default About;
