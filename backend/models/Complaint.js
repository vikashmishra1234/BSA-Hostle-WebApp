const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    studentId:{
        type:String,
        required:true
    },
    from:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String
    }
},
{
    timestamps:true
}
);

const Complaint = mongoose.model('complaint',complaintSchema);
module.exports = Complaint;