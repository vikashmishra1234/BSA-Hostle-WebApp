import axios from 'axios';
const url = 'https://bsa-backend-server.onrender.com/api';
// const url = 'http://localhost:5000/api';



export const adminLogin = async (data) => {
    try {
      const res = await axios.post(`${url}/admin/login`, data);
      return res.data;
    } catch (error) {
      alert(error.message)
      console.log(error);
    }
  };
export const issueNotice = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${localStorage.getItem("jwtAdmin")}`,
    },
  };
    try {
      const res = await axios.post(`${url}/issue/notice`, data,config);
      return res.data;
    } catch (error) {
      alert(error.message)
      console.log(error);
    }
  };
export const addStudent = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${localStorage.getItem("jwtAdmin")}`,
    },
  };
    try {
      const res = await axios.post(`${url}/add/student`, data, config);
      return res.data;
    } catch (error) {
      alert(error.message)
      console.log(error);
    }
  };
export const getRecent = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${localStorage.getItem("jwtAdmin")}`,
    },
  };
    try {
      const res = await axios.get(`${url}/get/recent`, config);
      return res.data;
    } catch (error) {
      alert(error.message)
      console.log(error);
    }
  };
export const getAllStudent = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${localStorage.getItem("jwtAdmin")}`,
    },
  };
    try {
      const res = await axios.get(`${url}/get/students`, config);
      return res.data;
    } catch (error) {
      alert(error.message)
      console.log(error);
    }
  };