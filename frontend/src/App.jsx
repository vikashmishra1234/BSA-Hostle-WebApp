import React, { lazy, Suspense, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { MyContextProvider } from "./Context/Contex";
import './components/style/style2.scss'

const Home = lazy(() => import('./components/Home'));
const AboutHeader = lazy(() => import('./components/HomeComponent/AboutHeader'));
const Administration = lazy(() => import('./components/Administration'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Main = lazy(() => import('./components/Hostler/Main'));
const Login = lazy(() => import('./components/Hostler/Login'));
const AdminMain = lazy(() => import('./components/Admin/AdminMain'));
const AdminLogin = lazy(() => import('./components/Admin/AdminLogin'));
const Footer = lazy(() => import('./components/Footer/Footer'));

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <MyContextProvider>
        <Navbar />
        <Suspense fallback={<h2>Loading...</h2>}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<AboutHeader />} />
            <Route exact path="/administration" element={<Administration />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/hostler" element={<Login />} />
            <Route exact path="/hostler/main" element={<Main />} /> {/* Corrected */}
            <Route exact path="/admin/main" element={<AdminMain />} />
            <Route exact path="/admin" element={<AdminLogin />} />
          </Routes>
          <Footer />
        </Suspense>
      </MyContextProvider>
    </div>
  );
};

export default App;
