const mongoose = require('mongoose');

const secondYearSchema= new mongoose.Schema({
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

const SecondY = mongoose.model('secondyear',secondYearSchema);
module.exports = SecondY;