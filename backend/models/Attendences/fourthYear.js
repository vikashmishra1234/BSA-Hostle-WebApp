const mongoose = require('mongoose');

const fourthYearSchema= new mongoose.Schema({
    studentName:{
        type:String,
        required:true
    },
    studentPhone:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
  

});

const FourthY = mongoose.model('fourthyear',fourthYearSchema);
module.exports = FourthY;