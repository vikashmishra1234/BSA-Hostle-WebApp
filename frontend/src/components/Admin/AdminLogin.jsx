import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { adminLogin } from '../services/Admin';

const AdminLogin = () => {
    const [loginInfo,setLoginInfo] = useState({});
    const Navigate = useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault()
       const res=await adminLogin(loginInfo)
       if(res.success){
        localStorage.setItem("jwtAdmin",res.jwtToken);
        Navigate('/admin/main');
       }
    }
    const handleClick = ()=>{
      setLoginInfo({...loginInfo,adminId:'8979481819',adminPassword:'vikash123'})
    }
  return (
    <div className="login-container">
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="adminId">Admin Id:</label>
        <input value={loginInfo.adminId} required name="adminId" onChange={(e)=>{setLoginInfo({...loginInfo,[e.target.name]:e.target.value})}} type="text" id="adminId"  />
      </div>
      <div className="input-group">
        <label htmlFor="adminPassword">Password:</label>
        <input value={loginInfo.adminPassword} required name="adminPassword" onChange={(e)=>{setLoginInfo({...loginInfo,[e.target.name]:e.target.value})}} type="password" id="adminPassword" />
      </div>
      <button style={{marginBottom:'5px',background:'green'}} onClick={handleClick} >Login as visitor</button>
      <button type="submit">Login</button>
    </form>
  </div>
  )
}

export default AdminLogin