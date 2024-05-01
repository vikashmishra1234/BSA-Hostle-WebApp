import React, { useEffect } from 'react'
import Carousele from './Carousel/Carousele'
import AboutMain from './HomeComponent/AboutMain'
import InsideCarousel from './HomeComponent/InsideCarousel'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import { useLocation } from 'react-router-dom'
import Info from './Info'

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
   <main>
    <Carousele key={Math.random()}/>
    <AboutMain/>
   
    <Info/>
    {/* <Contact/> */}
   
   </main>
  )
}

export default Home