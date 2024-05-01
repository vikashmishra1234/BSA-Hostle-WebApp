import React, { useContext, useEffect, useState } from "react";
import "../style/style4.scss";
import { PiStudentBold } from "react-icons/pi";
import { IoMdAddCircle } from "react-icons/io";
import { getAllStudent } from "../services/Admin";
import { MyContext } from "../../Context/Contex";
import { BiMessageAltDetail } from "react-icons/bi";
import Notice from "./Notice";
const AdminHeader = () => {
  const {setTolalStudents} = useContext(MyContext)
  const [allStudents,setStudents] = useState([])
  const [show,setShow] = useState(false);
  useEffect(()=>{
    const getData=async()=>{
      const res = await getAllStudent();
      setStudents(res.allStudents)
      setTolalStudents(res.allStudents)
     
    }
    getData()
  },[])
  return (
    <section className="admin-container">
      {
        show&&<Notice/>
      }
      <div>
        <h3>Admin Dashboard</h3>
      </div>
      <div className="header-content">
      
        <div className="header-item">
         
          <div>
           
            <PiStudentBold color="brown" /> {allStudents.length}
           
          </div>
          <span>Total Student</span>
        </div>
        <div className="header-item">
          <div onClick={()=>{setShow(!show)}}><BiMessageAltDetail /></div>
         <span>Issue Notice</span> 
        </div>

        <div className="header-item">
        <a href="#addstudent" style={{textDecoration:"none", color:'black'}}>
          
          <div style={{textAlign:'center'}}> <IoMdAddCircle /></div>
          <span>Add Student</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AdminHeader;
