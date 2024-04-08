import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';







function Add() {

  const [id, setId]=useState('')
  const[empName,setName]= useState('')
  const [empAge,setAge]=useState('')
  const [empDesg,setDesg]=useState('')
  const [empSalary, setSalary]=useState(0)

  let location =useNavigate()


  useEffect(()=>{
    setId(uuid().slice(0,3));

  },[])

  

  const addEmployee= async (e)=>{
    // prevent refresh the page
    e.preventDefault()
    // random id 
    setId(uuid().slice(0,3));
    const body ={
      id,
      empName,
      empAge,
      empDesg,
      empSalary
    }
    console.log(body);

    // api call
    const result = await axios.post('http://localhost:8000/add-employee',body)
    console.log(result);
    alert(result.data.message)
    // redirect to admin
    location('/')


   
  }



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
        onChange={(e)=>(setName(e.target.value))}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAge">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" placeholder="Enter Employee Age"
        onChange={(e)=>(setAge(e.target.value))}
        />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formDesignation">
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" placeholder="Enter Employee Designation"
        onChange={(e)=>(setDesg(e.target.value))}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formSalary">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="number" placeholder="Enter Employee Salary" 
        onChange={(e)=>(setSalary(e.target.value))}
        />
      </Form.Group>

      
      <Button onClick={(e)=>(addEmployee(e))}  variant="success" type="submit">
        Add
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

export default Add