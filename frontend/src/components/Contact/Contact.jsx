import React from "react";
import "../style/style2.scss";
import { IoMdSend } from "react-icons/io";
const Contact = () => {
  return (
    <form className="form-container">
      <h1>Leave Your Thought Here </h1>
      <span>And we will get back to you</span>
      <div className="input-container">
        <div>
          <input type="text" placeholder="Full Name" />
        </div>
        <div>
          <input type="Email" placeholder="Email id" />
        </div>
        <div>
          <textarea type="text" placeholder="message" />
        </div>
        <div>
          <button type="submit" style={{display:"flex" ,justifyContent:'center',alignItems:'center'}}>
            <strong style={{marginRight:'10px'}}>Send</strong>
            <IoMdSend size={25}  />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Contact;
