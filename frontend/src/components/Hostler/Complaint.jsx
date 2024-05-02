import React, { useState } from 'react'
import axios from 'axios'
import { sendComplaint } from '../services/Student';
import { Loading } from '../Loader';

const Complaint = () => {

    const [complaint,setComplait] = useState({});
    const [show,setShow] = useState(false);
    const [loader,setLoader]=useState(false);

    const handleChange = async(e)=>{
        const formData = new FormData();
        formData.append("file", e.target.files[0]);
        formData.append("upload_preset", "vikashmishra");
       
      const res=  await axios.post("https://api.cloudinary.com/v1_1/dwjh8zji6/image/upload", formData);
     complaint.imageUrl=res.data.url;
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setLoader(true)
        const res=await sendComplaint(complaint);
       
        setLoader(false)
        alert(
          res.message
        )
        
    }
  return (
    <section id='complaint' className='complaint-container'>
      {
        loader&&<Loading/>
      }
        <h1 onClick={()=>setShow(!show)}>
            Register A Complaint ?
        </h1>
       {
      show&&<div className='complaint-form'>
            <form action="" onSubmit={handleSubmit}>
                <input onChange={(e)=>{setComplait({...complaint,[e.target.name]:e.target.value})}}  name='title' type="text" placeholder='Title' required />
                <textarea onChange={(e)=>{setComplait({...complaint,[e.target.name]:e.target.value})}} name='description' type="text" placeholder='description' required />
                <input onChange={handleChange} name='image' type="file" />
                <button type='submit'><span>Rigister</span></button>
            </form>
        </div>
       } 
    </section>
  )
}

export default Complaint