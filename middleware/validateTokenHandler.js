const asyncHandler = require("express-async-handler")
const jwt = require('jsonwebtoken')
const validationToken = asyncHandler(async(req,res,next)=>{
    let token;
    let authHeader = req.Authorization || req.headers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];
        
        jwt.verify(token,process.env.ACCESS_TOKEN,(err,decoded)=>{
            if(err){
                //return res.status(401).json({Message:"User is not authorized"})
                console.log("errord")
            }
            req.user = decoded.user;
            console.log(decoded.user,"user")
            next()
        })
        
    }
    if(!token){
        return res.status(401).json({message:"user no tauthorized or token is missing"})
    }
})
module.exports = validationToken
