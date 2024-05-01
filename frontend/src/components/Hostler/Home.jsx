import React from "react";
import "../style/style3.scss";
import { motion } from "framer-motion";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const Navigate = useNavigate()
  return (
    <div className="hostler-home">
      <section className="hostler-section1">
        <span>Welcome back</span>{" "}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
            exit: null,
          }}
          id="name"
        >
          Vikash Mishra
        </motion.span>
        {/* <h3>Hope You are doing well</h3> */}
        <div className="button-container">
            <div className="button">
                <button ><a rel="stylesheet" href="#complaint" style={{color:'white',textDecoration:'none'}} >Complaint</a></button>
            </div>
            <div className="button">
                <button><a style={{color:'white',textDecoration:'none'}} href="#notices">Notices</a></button>
            </div>
        </div>
      </section>
      <section className="hostler-section2">
        <dotlottie-player
          src="https://lottie.host/e86a1f97-a56a-4b35-8f69-cd803041fbeb/3UPZ8rC3Z7.lottie"
          background="transparent"
          speed="1"
          direction="1"
          playMode="normal"
          id='img'
          loop
          autoplay
        />
      </section>
    </div>
  );
};

export default Home;
