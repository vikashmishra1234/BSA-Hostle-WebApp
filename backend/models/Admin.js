const mongoose = require('mongoose');

const adminSchema= new mongoose.Schema({
    adminId:{
        type:String,
        required:true
    },
    adminPassword:{
        type:String,
        required:true
    },
});

const Admin = mongoose.model('admin',adminSchema);
module.exports = Admin;