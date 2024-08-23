import React, { useEffect, useState } from "react";
import "../components/style/style1.scss";
import Logo from "../assets/BsaLogo.webp";
import { NavLink } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { animate, motion } from 'framer-motion';
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 56.66666793823242) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleHover = () => {
    setShow(!show);
  };

  const ulMotion = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 }
  };

  return (
    <>
      <header>
        <div>
          <MdEmail size={24} /> bsacet@gmail.com
          <FaPhone size={20} /> +1120346
        </div>
      </header>
      <nav className={scroll ? "nav" : ""}>
        <img src={Logo} alt="" />
        <div className={`hamburger ${show ? 'rotate' : ''}`}>
          {show ? <RxCross2 onClick={handleHover} size={30} color="white" /> : ''}
          {!show && <GiHamburgerMenu onClick={handleHover} color="white" size={30} />}
        </div>
        <motion.ul
          style={{ display: show ? 'flex' : '' }}
          onClick={handleHover}
          initial="initial"
          whileInView="animate"
          variants={ulMotion}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div>
            <img src={Logo} alt="bsa logo" />
          </div>
          <NavLink to={"/"}>
            <li>Home</li>
          </NavLink>
          <NavLink to={"/about"}>
            <li>About Us</li>
          </NavLink>
          <NavLink to={"/administration"}>
            <li>Administration</li>
          </NavLink>
          <NavLink to="https://www.bsacet.org/admission-registration/" target="_blank">
            <li>Admission</li>
          </NavLink>
          <NavLink to={"/about"}>
            <li>Facilities</li>
          </NavLink>
          <NavLink to="/gallery">
            <li>Gallery</li>
          </NavLink>
          <NavLink to={"/contact"}>
            <li>Contact Us</li>
          </NavLink>
          <NavLink to={"/hostler"}>
            <li>Hostler</li>
          </NavLink>
          <NavLink to={"/admin"}>
            <li>Admin</li>
          </NavLink>
        </motion.ul>
      </nav>
    </>
  );
};

export default Navbar;
