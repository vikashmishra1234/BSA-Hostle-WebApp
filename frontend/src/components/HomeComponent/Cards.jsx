import React from 'react'
import '../style/style1.scss'
import { Navigate, useNavigate } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'
import {animate, motion} from 'framer-motion'


const Cards = ({icon,title,imgUrl,path}) => {
  const Navigate=useNavigate()
  const handleClick=()=>{
    Navigate(`/${path}`)
  }
  const cardMotion={
    initial:{opacity:0,width:'0%'},
    animate:{opacity:1,width:'370px'},
    
  }
  return (
    < >

    <motion.div initial='initial' animate="animate" className='card-container'>
        <img src={imgUrl} alt="" />
        <div className='icon'>{icon}</div>
       <h2>{title}</h2>
       <div>
        <button onClick={handleClick}>More</button>
       </div>
    </motion.div>
    </>
  )
}

export default Cards