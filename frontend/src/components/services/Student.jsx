import axios from "axios";
// const url = "https://bsa-hostle-website.onrender.com";
const url ="https://bsa-backend-server.onrender.com/api";
const config = {
  headers: {
    "Content-Type": "application/json",
    "Authorization": `bearer ${localStorage.getItem("jwtToken")}`,
  },
};
export const sendComplaint = async (data) => {
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
  try {
    const res = await axios.get(`${url}/get/notices`, config);
    return res.data;
  } catch (error) {
    alert(error.message)
    console.log(error);
  }
};
