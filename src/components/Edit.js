import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate, useParams } from 'react-router-dom';




function Edit() {

  const [id, setId]=useState('')
  const[empName,setName]= useState('')
  const [empAge,setAge]=useState('')
  const [empDesg,setDesg]=useState('')
  const [empSalary, setSalary]=useState(0)

const params =useParams()
const location = useNavigate()

// console.log(params.id);

// api call to get details of a particular employee from server
const fetchEmployee= async()=>{
  const result = await axios.get('http://localhost:8000/edit-employee/'+params.id)
  setId(result.data.employee.id);
  setName(result.data.employee.uname);
  setAge(result.data.employee.age);
  setDesg(result.data.employee.desg);
  setSalary(result.data.employee.salary);


}

console.log(id);
console.log(empName);
console.log(empAge);
console.log(empDesg);
console.log(empSalary);

const handleUpdate = async (e)=>{
  e.preventDefault()
  // create body to share backend 
  const body ={
    id,
    empName,
    empAge,
    empDesg,
    empSalary

  }

  // api call for update data (using post method)

  const result = await axios.post('http://localhost:8000/update-employee',body)
  console.log(result);
  alert(result.data.message)
  location('/')


}



useEffect(()=>{
  fetchEmployee()
},[])


  return (
    <div>
      <div className="container-fuild">
        <h1 className='mx-3'>Add New Employee  <i class="fa-solid fa-user-plus"></i> </h1>

        <p style={{textAlign:'justify', margin:'10px'}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi necessitatibus dignissimos iure accusamus consequatur rerum, alias mollitia consectetur ut earum nemo ex sed! Et vel libero rem repudiandae, culpa at. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quia fugit vero iste similique ipsa harum dolores voluptatibus distinctio error in ullam eius quam quisquam culpa cum nemo, porro natus?
        </p>
      </div>

      {/* form design */}
      <div className=' mx-5 mt-3 p-5 border border-primary rounded '>
      <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Employee Name" 
        onChange={(e)=>(setName(e.target.value))} value={empName}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAge">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Enter Employee Age"
        onChange={(e)=>(setAge(e.target.value))}  value={empAge}
        />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formDesignation">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" placeholder="Enter Employee Designation"
        onChange={(e)=>(setDesg(e.target.value))}  value={empDesg}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formSalary">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="number" placeholder="Enter Employee Salary" 
        onChange={(e)=>(setSalary(e.target.value))}  value={empSalary}
        />
      </Form.Group>

      
      <Button onClick={(e)=>handleUpdate(e)}  variant="success" type="submit">
        Update
      </Button>

     <Link to={'/'}>
        <Button className='ms-3'  variant="warning" type="submit">
          Close
        </Button>
     </Link>
    </Form>

      </div>
    </div>
  )
}

export default Edit