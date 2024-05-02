import React, { useEffect } from 'react'
import Home from './Home'
import Jokes from './Jokes'
import Complaint from './Complaint'
import Menu from './Menu'
import { Navigate, useNavigate } from 'react-router-dom'

const Main = () => {
  const Navigate = useNavigate()
  useEffect(()=>{
    !localStorage.getItem("jwtToken")&&Navigate('/hostler');
  },[localStorage.getItem("jwtToken")])
  return (
    <>
    <Home/>
    <Jokes/>
    <Menu/>
    <Complaint/>
    </>
  )
}

export default Main