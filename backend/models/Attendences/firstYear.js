const mongoose = require('mongoose');

const fistYearSchema= new mongoose.Schema({
    studentName:{
        type:String,
        required:true
    },
    studentPhone:{
        type:String,
        required:true
    },
    studentId:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    year:{
        type:String,
        default:"1"
    },
  

},
{
    timestamps:true
});

const FirstY = mongoose.model('firstyear',fistYearSchema);
module.exports = FirstY;