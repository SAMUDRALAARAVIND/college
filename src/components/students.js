import "./students.css"
import { useState  , useEffect } from "react"
const Student = () => {
    
     const [form , setForm] = useState({gender:"male"})
    const [response , setResponse] = useState("")

     const submitData = (e) => {
           e.preventDefault() 
           console.log(form) 
           fetch("http://localhost:8080/students/add" , {
                method: "POST" ,
                headers : {
                     "Accept" : "application/json" ,
                     "Content-Type" : "application/json" 
                } ,
                body : JSON.stringify(form) 
           }).then((data) => data.json())
           .then((response) => setResponse(response))
     }  

     return (
       <>
            <form 
                className="student-data"
                onSubmit={submitData}
            >
                <input 
                    name="name"
                    placeholder="Name"
                    onChange={(e) => setForm({...form, name:e.target.value}) }
                    required
                />
                <input 
                    type={"email"}
                    name="email"
                    placeholder="Email" 
                    onChange={(e) => setForm({...form, email:e.target.value}) }
                    required
                />
                <input 
                    name="rollNumber" 
                    placeholder="RollNumber" 
                    onChange={(e) => setForm({...form, rollNumber:e.target.value}) }
                    required
                />
                <input
                    name="age" 
                    placeholder="Age" 
                    type="number" 
                    onChange={(e) => setForm({...form, age:e.target.value}) }
                    required
                />
                <select
                    name= "gender" 
                    placeholder="Gender"
                    onChange={(e) => {console.log(e.target.value) ; setForm({...form, gender:e.target.value})} }
                    required
                >

                    <option value="male">
                        Male
                    </option>
                    <option value="female">
                        Female
                    </option>
                    <option value="others">
                        Others
                    </option>
                </select>
                <button type="submit" >Add Student</button>
            </form>

            {
                response.message === "success" && 
                <div style={{ color: "green" }}>Added succesfully</div>
            }
            {
                response.message === "failed" && 
                <div style={{ color: "red" }}>An error occured </div>
            }
       </>
     )
}

export default Student 

/*
    1) Create a student (add a student) 
    2) Update student details
    2) Able to see all the list of students 
    4) delete student data 


    Every sudent will have : 
     {
        name : , 
        age : ,
        branhc: ,
        course: ,
        rollNumber : ,
        email: ,

     }

*/