import React from 'react'
import Bsa from '../../assets/BsaLogo.webp'
// import Aktu from '../../assets/aktu.png'
import { Aktu } from './Imgae'
const Footer = () => {
  return (
        <footer className='footer-container'>
            <section>

                <img src={Bsa} alt="" />
    
            </section>
            <div>
                <h1>BSA Hostle : A Safe Heaven</h1>
            </div>
            <section className='copy-container'>
                <span>Copyright @ 2023-Present | Bsa Hostle</span>
                <span>Made with Love:Vikash Mishra</span>
            </section>
        </footer>
  )
}

export default Footer