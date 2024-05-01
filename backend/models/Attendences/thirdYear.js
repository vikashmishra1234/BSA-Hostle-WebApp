const mongoose = require('mongoose');

const thirdYearSchema= new mongoose.Schema({
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

const ThirdY = mongoose.model('thirdyear',thirdYearSchema);
module.exports = ThirdY;