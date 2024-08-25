const express = require('express')
const errorHandler = require('./middleware/errorHandler')
const dbConnection = require('./config/dbConnection')
const dotenv = require('dotenv').config()

const app=express()
const port = process.env.PORT || 5001
//app.get('/api/contact',(req,res)=>{
//    res.json({message:"All contacts"})
//})
app.use(express.json())
dbConnection()
app.use("/api/contact",require('./routes/ContactRoutes'))
app.use("/api/user",require('./routes/userRoute'))
app.use(errorHandler)
app.listen(port,()=>{
    console.log(`server running on ${port}`)
})