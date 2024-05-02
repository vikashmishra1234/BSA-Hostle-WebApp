import React from 'react'
import AdminHeader from './AdminHeader'
import Analysis from './Analysis'
import AddStudent from './AddStudent'
import { useNavigate } from 'react-router-dom'

const AdminMain = () => {
  const Navigate = useNavigate()
  useEffect(()=>{
    !localStorage.getItem("jwtToken")&&Navigate('/hostler');
  },[])
  return (
    <>
    <AdminHeader/>
    <Analysis/>
    <AddStudent/>
    </>
  )
}

export default AdminMain