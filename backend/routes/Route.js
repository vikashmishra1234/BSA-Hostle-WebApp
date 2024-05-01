const express = require("express");
const {
  addStudent,
  adminLogin,
  getRecent,
  getStudents,
  notice,
} = require("../controller/Admin.js");
const validateStudent = require("../validations/studentValidation.js");
const {
  addComplaint,
  getPassword,
  studentLogin,
  getNotices,
} = require("../controller/Student.js");
const validateComplaint = require("../validations/complaintValidation.js");
const { verifyStudent, verifyAdmin } = require("../validations/tokenVerify.js");
const { firsYearAttendece } = require("../controller/Attendeces.js");

const Router = express.Router();

Router.get("/get/recent", verifyAdmin, getRecent);
Router.get("/get/students", verifyAdmin, getStudents);
Router.get("/get/notices", verifyStudent, getNotices);

Router.post("/add/student", verifyAdmin, validateStudent, addStudent);
Router.post("/add/complaint", verifyStudent, validateComplaint, addComplaint);
Router.post("/get/password", getPassword);
Router.post("/student/login", studentLogin);
Router.post("/admin/login", adminLogin);
Router.post("/issue/notice", verifyAdmin, notice);

module.exports = Router;
