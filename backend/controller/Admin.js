const Admin = require("../models/Admin.js");
const Hostler = require("../models/Hostler.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Notice = require("../models/Notice.js");

exports.adminLogin = async (req, res) => {
  const admin = await Admin.findOne({ adminId: req.body.adminId });

  if (!admin) {
    return res
      .status(404)
      .json({ success: false, error: "admin does not exits" });
  }
  const isCompared = bcrypt.compareSync(
    req.body.adminPassword,
    admin.adminPassword
  );
  if (!isCompared) {
    return res.status(401).json({ success: false, error: "invalid password" });
  }
  const data = {
    id: admin._id,
  };
  const jwtToken = jwt.sign(data, `${process.env.SECRETE_KEY1}`);
  return res
    .status(202)
    .json({ success: true, message: "login successful", jwtToken: jwtToken });
};

exports.addStudent = async (req, res) => {
  try {
    const studentExit = await Hostler.findOne({
      studentRollNumber: req.body.studentRollNumber,
    });

    if (studentExit) {
      return res
        .status(200)
        .json({ error: "Student Already Exits", success: false });
    }
    const newStudent = await Hostler(req.body);
    await newStudent.save();
    return res
      .status(200)
      .json({
        success: true,
        Student: newStudent,
        message: "Student Registered Successfully",
      });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

exports.getStudents=async(req,res)=>{
  try {
    
  
   const students = await Hostler.find({}).sort({ createdAt: -1 });
    if (students&&students.lenght<0) {
      console.error("Error:", err);
      return res
        .status(404)
        .json({ success: false, error: "Students Not Found" });
    }
   
    return res.status(200).json({ success: true, allStudents: students });
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({ success: false, error: error.message });

  }

}

exports.getRecent = async (req, res) => {
  try {
    
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1); // Get yesterday's date
    const dayBeforeYesterday = new Date(today);
    dayBeforeYesterday.setDate(today.getDate() - 2);
   const recents = await Hostler.find(
      {
        createdAt: {
          $gte: dayBeforeYesterday,
          $lt: today,
        },
      }
      
    ).sort({ createdAt: -1 });
    if (recents&&recents.lenght<0) {
      console.error("Error:", err);
      return res
        .status(404)
        .json({ success: false, error: "Students Not Found" });
    }
   
    return res.status(200).json({ success: true, recentStudents: recents });
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({ success: false, error: error.message });

  }
};

exports.notice=async(req,res)=>{
  try {
   
    const newNotice = await Notice(req.body);
    await newNotice.save();
   return res.status(200).json({success:true,message:'save successfully'});
  } catch (error) {
    return res.status(500).json({success:false,error:error.message})
  }
}

