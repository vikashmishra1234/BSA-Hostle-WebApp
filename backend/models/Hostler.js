const mongoose = require('mongoose');

const hostlerSchema= new mongoose.Schema({
    studentName:{
        type:String,
        required:true
    },
    studentPhone:{
        type:String,
        required:true
    },
    studentEmail:{
        type:String,
        required:true
    },
    studentRollNumber:{
        type:String,
        required:true
    },
    parentPhone:{
        type:String,
        required:true
    },
    studentPassword:{
        type:String,
       
    },
    studentYear:{
        type:String,
        required:true
    },

},{
    timestamps:true
});

module.exports = mongoose.model('hostler',hostlerSchema);