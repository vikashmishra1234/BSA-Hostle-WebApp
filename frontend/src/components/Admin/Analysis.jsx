import React, { useContext, useEffect, useState } from 'react'
import { PiStudentBold } from "react-icons/pi";
import { getRecent } from '../services/Admin';
import { MyContext } from '../../Context/Contex';
import  Graph  from './Graph';
import { Link } from 'react-router-dom';
const Analysis = () => {
    const [recents,setRecents] = useState([])
    const {change} = useContext(MyContext)
    useEffect(()=>{
            const getData=async()=>{
                    const res = await getRecent();
                    setRecents(res.recentStudents);
            }
            localStorage.getItem("jwtAdmin")&&getData()
    },[change,localStorage.getItem("jwtAdmin")])
  return (
   <section className='analysis'>
    <div className='graph-analysis analysis-common'>
       <Graph/>
    </div>
    <div className='recent-student analysis-common'>
        <h3>Recently Added Students</h3>
        {
            recents&&recents.map((data,index)=>(

        <div key={index} className='student'>
            <div>
                <PiStudentBold/>
            </div>
            <div>
                {data.studentName} ({data.studentYear} year)
            </div>
        </div>
            ))
        }
        <div className='bottom-header'>
            <h2>
              <Link to={'/hostle/main'}>see all</Link> 
            </h2>
         </div>
    </div>
   </section>
  )
}

export default Analysis