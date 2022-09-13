const express = require("express") 
const bodyParser = require("body-parser") 
const cors = require("cors")
const student = require("./routes/students")

const app = express() 


app.use( bodyParser.json() )
app.use( cors() )

app.use("/students" , student) 

const PORT = 8080 
app.listen(PORT , () => {
     console.log(`App is listening on ${PORT}`)
})


// http://localhost:8080/students/all
// testing ->  postman