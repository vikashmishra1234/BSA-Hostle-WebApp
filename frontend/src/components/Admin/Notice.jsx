import React, { useState } from 'react'
import { issueNotice } from '../services/Admin';

const style = {
    position:'absolute',
    top:'57%',
    left:'0%',
    right:"0%",
    width:'60%',
    color:'white',background:'#a09494',
    boxShadow:"0px 3px 17px black",
    padding:' 50px 10px 45px 10px',
    margin:'auto'

}
const btn={
    width:'100%',
    padding:'7px',
    fontSize:'18px',
    background:'#2cadd7',
    border:'none',
    color:'white',
    marginTop:"4px",
}

const Notice = () => {
    const [notice,setNotice] = useState('')
    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(notice.length>0)
        {

          const res =  await issueNotice({notice})
          console.log(res)
        }
    }
  return (
   <form style={style} action="" onSubmit={handleSubmit}>
    <textarea
    style={{fontSize:'20px',outline:'none',width:'100%'}}
     onChange={(e)=>{setNotice(e.target.value)}} name="notice" id="notice" cols="25" rows="5" placeholder='notice'/>
    <div>

    <button style={btn} type='submit'>Issue</button>
    </div>
   </form>
  )
}

export default Notice