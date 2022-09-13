const express = require("express")
const mongoose = require("mongoose") 
const router = express.Router() 
const Student = require("../models/student")


mongoose.connect('mongodb://localhost/students' , (err) => {
     if(err) {
         console.log(err)
     }
     else {
        console.log("connected") 
     }
})


// http: //localhost:8080/students/add 
router.post("/add" , async (req, resp) => {
     try {  
        const data = await Student.create(req.body) 
        resp.status(200).json({ message: "success" })
     }catch(e) {
        resp.status(500).json( { message: "failed" } )
     }
})


module.exports = router