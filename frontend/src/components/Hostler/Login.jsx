import React, { useState } from 'react';
import { studentLogin } from '../services/Student';
import { Navigate, useNavigate } from 'react-router-dom';
import { Loading } from '../Loader';
import '../style/style3.scss'

const Login = () => {
    const [loginInfo,setLoginInfo] = useState({studentRollNumber:'',studentPassword:""});
    const [loader,setLoader] = useState(false);
    const Navigate = useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault()
       setLoader(true)
       const res=await studentLogin(loginInfo);
       localStorage.setItem("jwtToken",res.jwtToken);
       setLoader(false)
       if(res.success){
        Navigate('/hostler/main');
       }
    }
    const handleClick=()=>{
      setLoginInfo({...loginInfo,studentRollNumber:'2100650100112',studentPassword:'862910'})
      
      //handleSubmit()

    }
  return (
    <div className="login-container">
      {
        loader&&<Loading/>

        
      }
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="rollNumber">Roll Number:</label>
          <input value={loginInfo.studentRollNumber} required name="studentRollNumber" onChange={(e)=>{setLoginInfo({...loginInfo,[e.target.name]:e.target.value})}} type="text" id="rollNumber"  />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input value={loginInfo.studentPassword} required name="studentPassword" onChange={(e)=>{setLoginInfo({...loginInfo,[e.target.name]:e.target.value})}} type="password" id="password" />
        </div>
        <button onClick={handleClick} style={{marginBottom:'5px',background:'green'}}>Login as visitor</button>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;