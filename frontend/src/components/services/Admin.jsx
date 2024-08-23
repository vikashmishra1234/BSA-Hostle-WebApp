import axios from 'axios';

// const baseURL = 'http://localhost:5000/api';
const baseURL = 'https://bsa-backend-server.onrender.com/api';


const getAuthHeaders = () => ({
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${localStorage.getItem("jwtAdmin")}`,
  },
});

// Utility function for error handling
const handleRequest = async (request) => {
  try {
    const response = await request();
    return response.data;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
};

// API functions
export const adminLogin = (data) => handleRequest(() => axios.post(`${baseURL}/admin/login`, data));

export const issueNotice = (data) => handleRequest(() => axios.post(`${baseURL}/issue/notice`, data, getAuthHeaders()));

export const addStudent = (data) => handleRequest(() => axios.post(`${baseURL}/add/student`, data, getAuthHeaders()));

export const getRecent = () => handleRequest(() => axios.get(`${baseURL}/get/recent`, getAuthHeaders()));

export const getAllStudent = () => handleRequest(() => axios.get(`${baseURL}/get/students`, getAuthHeaders()));
