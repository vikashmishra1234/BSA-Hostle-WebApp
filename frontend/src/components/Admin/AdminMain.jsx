import React, { useEffect } from 'react'
import AdminHeader from './AdminHeader'
import Analysis from './Analysis'
import AddStudent from './AddStudent'
import { useNavigate } from 'react-router-dom'

const AdminMain = () => {
  const Navigate = useNavigate()
  useEffect(()=>{
    !localStorage.getItem("jwtAdmin")&&Navigate('/admin');
  },[localStorage.getItem("jwtAdmin")])
  return (
    <>
    <AdminHeader/>
    <Analysis/>
    <AddStudent/>
    </>
  )
}

export default AdminMain