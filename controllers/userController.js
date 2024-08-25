const asyncHandler = require("express-async-handler");
const User = require("../model/userModel")
const bcrypt = require("bcrypt")
//@des Register user
//@route POST /api/register
//@access public
const registerUser = asyncHandler(async (req,res) => {
  //res.json({message:"register the  user"}); 
    const {username,email,password}=req.body
    console.log(username,email,password)
    if(!username||!email||!password){
      return res.status(404).json({message:"all filed are importent"});
    }
    const userAvilable = await User.findOne({email})

    if(userAvilable){
      return res.status(403).json({message:"user already avilable"});
    }
     //hasing the password
    const hashPassword = await bcrypt.hash(password,10)
    console.log("the hashed password",hashPassword)
    const user = await User.create({
        username,
        email,
        password:hashPassword,
    })
    console.log(`user created ${user}`)
    if(user){
        return res.status(201).json({_id:user.id,email:user.email,message:"Register the  user"})
    }
    else{
      return res.status(400).json({message:"user data not vaild"});
      
    }
    
    
  });
  //@des loginUser
//@route POST /api/login
//@access public
  const loginUser = asyncHandler(async (req,res) => {
    res.json({message:"Login the  user"});
    
  });
  //@des currentUser
//@route POST /api/current
//@access public
  const currentUser = asyncHandler(async (req,res) => {
    res.json({message:"current  user"});
    
  });
  module.exports = {registerUser,loginUser,currentUser}