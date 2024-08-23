import axios from "axios";
const url ="https://bsa-backend-server.onrender.com/api";
// const url = 'http://localhost:5000/api';


export const sendComplaint = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${localStorage.getItem("jwtToken")}`,
    },
  };
  try {
    const res = await axios.post(`${url}/add/complaint`, data, config);
   return res.data
  } catch (error) {
    console.log(error);
  }
};
export const studentLogin = async (data) => {
  try {
  
    const res = await axios.post(`${url}/student/login`, data);
    return res.data;
  } catch (error) {
    alert(error.message)
    console.log(error);
  }
};
export const getNotices = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${localStorage.getItem("jwtToken")}`,
    },
  };
  try {
    const res = await axios.get(`${url}/get/notices`, config);
    return res.data;
  } catch (error) {
    alert(error.message)
    console.log(error);
  }
};
