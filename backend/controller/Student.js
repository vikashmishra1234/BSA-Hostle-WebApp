const Complaint = require('../models/Complaint');
const Hostler = require('../models/Hostler');
const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken')
const { sendMail } = require('./sendMail');
const Notice = require('../models/Notice');
exports.addComplaint=async(req,res)=>{
   try {

       req.body.studentId=req.student.id;
       req.body.from=req.student.email
    const isSend = await sendMail(req.body);
    
    if(!isSend.send){
        return res.status(404).json({success:false,error:'unable to register your complaint'})
    }

    const newComplaint = await Complaint(req.body);
    await newComplaint.save();
    return res.status(200).json({success:true,message:"your complaint is registered"});
   } catch (error) {
    return res.status(500).json({success:false,erro:error.message})
   }
}



exports.getPassword = async (req, res) => {
    try {
        const student = await Hostler.findOne({ studentEmail: req.body.studentEmail });

        if (!student) {
            return res.status(500).json({ success: false, error: "It looks like you are not a Hostler" });
        }

        const studentPassword = Math.floor(Math.random() * 1000000);
        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(studentPassword.toString(),salt)
        
       
     const newStudent =   await Hostler.findOneAndUpdate(
            { studentEmail: req.body.studentEmail },
            { studentPassword: hashPass },
            { new: true } // To return the updated document
        );

        return res.status(200).json({ success: true,studentPassword:studentPassword,message: "Password updated successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
};

exports.studentLogin=async(req,res)=>{

    const studentExit = await Hostler.findOne({studentRollNumber:req.body.studentRollNumber});
    if(!studentExit){
        return res.status(404).json({success:false,error:'Student is Not A Hostler '});
    }
   const isCompared = bcrypt.compareSync(req.body.studentPassword,studentExit.studentPassword);
   
   if(!isCompared){
    return res.status(409).json({success:false,error:"invalid Password"});
   }
   const data = {
    id:studentExit._id,
    email:studentExit.studentEmail,
   }
   const jwtToken = jwt.sign(data,`${process.env.SECRETE_KEY}`);
   return res.status(200).json({success:true,message:"login successful",jwtToken:jwtToken})
}

exports.getNotices = async(req,res)=>{
    try {
        
        const today = new Date();
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1); // Get yesterday's date
        const dayBeforeYesterday = new Date(today);
        dayBeforeYesterday.setDate(today.getDate() - 2);
       const notices = await Notice.find(
          {
            createdAt: {
              $gte: dayBeforeYesterday,
              $lt: today,
            },
          }
        ).sort({ createdAt: -1 });
        if (notices&&notices.lenght<0) {
          console.error("Error:", err);
          return res
            .status(404)
            .json({ success: false, error: "Students Not Found" });
        }
        return res.status(200).json({ success: true, notices: notices });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
}