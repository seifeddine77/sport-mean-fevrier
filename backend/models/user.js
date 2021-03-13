const mongoose = require('mongoose');
const userSchema = mongoose.Schema(
    {
  
    firstname:String,
    lastName:String,
    email:String,
    pwd:String,
    confirmpwd:String,
    
    

    }
)
const user = mongoose.model('User', userSchema);
module.exports = user;