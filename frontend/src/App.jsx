import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import AboutHeader from "./components/HomeComponent/AboutHeader";
import Administration from "./components/Administration";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Main from "./components/Hostler/Main";
import Login from "./components/Hostler/Login";
import AdminMain from "./components/Admin/AdminMain";
import AdminLogin from "./components/Admin/AdminLogin";
import { MyContextProvider } from "./Context/Contex";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div>
      <MyContextProvider>

     
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/about" element={<AboutHeader />} />
          <Route exact path="/administration" element={<Administration />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/hostler" element={<Login />} />
          <Route exact path="/hostle/main" element={<Main />} />
          <Route exact path="/admin/main" element={<AdminMain />} />
          <Route exact path="/admin" element={<AdminLogin />} />
        </Routes>
        <Footer/>
     
      </MyContextProvider>
    </div>
  );
};

export default App;
