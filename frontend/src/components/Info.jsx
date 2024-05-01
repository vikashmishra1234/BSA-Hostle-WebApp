import React, { useState } from "react";
import "../components/style/style2.scss";
import { Link } from "react-router-dom";
const Info = () => {
  const [show,setShow] = useState(false);
  const handleHover=()=>{
    setShow(true)
  }
  const handleLeave=()=>{
    setShow(false)
  }
  return (
    <section className="image-container">
      <div onMouseEnter={handleHover} onMouseLeave={handleLeave} className="image-container1">
    {
      show&&<div style={{color:'white'}}>
        Bsa College Mathura
      </div>
    }
      </div>
      <div className="image-container2">
        <div className="info-container">
          <div className="container-info1">
            <h1>Addmission HelpLine</h1>
            <h3>9105337818</h3>
            </div>
        <div className="container-info2">
              <h3>Important Links</h3>
              <p>
                National Conference on "Emerging Trends in Science, Engineering
                & Management" (ETSEM-2024)
              </p>
              <h3> <Link to={'https://docs.google.com/forms/d/e/1FAIpQLSfj9z6pxVP-kSXLz_axc276q6EwLfzEtLiddoc-oj3mkpd0Zw/viewform'} target="_blank">FOR MORE INFO CLICK HERE</Link></h3>
              <p>
                INDUCTION PROGRAM SCHEDULE AND GALLERY
              </p>
                <h3>Click Here</h3>
              <p>Antiragging Affidavit Information Link</p>
              <h3><Link to={'https://antiragging.in/'} target="_blank">https://antiragging.in/</Link></h3>
              <h3><Link to={'https://amanmovement.org/'} target="_blank">https://amanmovement.org/</Link></h3>
              <p>For further assistance call on 7017456621 or mail</p>
              <h3>rahul.pathak@www.bsacet.org</h3>
              
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default Info;
