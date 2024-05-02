import React, { useEffect, useState } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { TfiAnnouncement } from "react-icons/tfi";
import { getNotices } from "../services/Student";

const Menu = () => {
  const [notices,setNotice] = useState([]);
  useEffect(()=>{
      const getData = async()=>{
        const res = await getNotices();
        setNotice(res.notices);
      }
      localStorage.getItem("jwtToken")?getData():''
  },[localStorage.getItem("jwtToken")])
  return (
    <section id="notices" className="hostle-notice">
        <h3
        
        >
          Announcement <TfiAnnouncement />
        </h3>
        <marquee direction="up" behavior="scroll" scrollamount="2">
          {
            notices.map(data=>(
          <div key={data._id} className="scroll">
            <h1> <FaAnglesRight /> {data.notice} </h1>
          </div>

            ))
          }
          
        </marquee>
      </section>
  );
};

export default Menu;
