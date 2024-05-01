const mongoose = require('mongoose');

const noticeSchema = new mongoose.Schema({
    notice:{
        type:String,
        required:true
    },
  
  
},
{
    timestamps:true
}
);

const Notice = mongoose.model('notice',noticeSchema);
module.exports = Notice;