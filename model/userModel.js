const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:[true, "add user name"]
    },
    email:{
        type:String,
        required:[true, "add user name"],
        unique:[true,"email already taken"]
    },
    password:{
        type:String,
        required:[true, "add user name"]
    }
},{timestamps:true})
module.exports = mongoose.model("user",userSchema)