const mongoose = require("mongoose") 

const studentSchema =  mongoose.Schema({ 
    name: {
         required: true , 
         type:String
    } ,
    email : {
         required: true ,
         type: String 
    } ,
    age: {
        required: true  ,
        type: Number 
    } ,
    gender: {
        required: true ,
        type:String 
    } ,
    rollNumber: {
        required: true ,
        type: String 
    }
})


module.exports = mongoose.model("Student" , studentSchema ) 