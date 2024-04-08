import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import './Admin.css'
import axios, { all } from 'axios';
import { Link } from 'react-router-dom';



function Admin() {

  const [allEmployees, setAllEmployees]=useState([])

  const fetchData = async ()=>{
      const result= await axios.get('http://localhost:8000/get-all-employees')
      // console.log(result.data. employees);
      setAllEmployees(result.data. employees);
      
  }

  // handleDelete
  const handleDelete = async (id)=>{
    const result = axios.delete('http://localhost:8000/delete-employee/'+id)
    alert((await result).data.message)
    fetchData()
  }
  console.log(allEmployees);
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div>
 
      <div className="container-fluid mt-5">
        <h1> <i class="fa-solid fa-user-group"></i> Employee Management App
        
<Link to={'/add'}>
          <a href="" className='btn btn-success ms-4'> <i class="fa-solid fa-user-plus"></i> Add Employee</a>
  
</Link>
        </h1>

        <p style={{textAlign:'justify'}}>
          This is dummy data. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea nihil libero quia repellendus velit. Sit fugit porro similique animi vel suscipit voluptas tenetur delectus! Expedita neque doloremque repellendus? Voluptatibus, est?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quia ratione dolores tempora porro minus dignissimos excepturi rerum et esse. Voluptatem perferendis dolor autem nemo minima aspernatur quod quidem vel.
        </p>

      </div>

      {/* table design */}
      <div className='mx-5'  >
        <h3>Employee Details</h3>
      <Table striped bordered hover    >
      <thead>
        <tr>
          <th>No</th>
          <th> Name</th>
          <th>Age</th>
          <th>Desgnation</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       { allEmployees?.map((item, index)=>(
        <tr>
          <td>{index+1}</td>
          <td>{item.uname}</td>
          <td>{item.age}</td>
          <td>{item.desg}</td>
          <td>{item.salary}</td>
          <td>
          <Link to={'/edit/'+item.id}>
            
              <button className='btn btn-warning ms-3'><i class="fa-solid fa-pen"></i></button>
          
          </Link>
            <button onClick={(e)=>handleDelete(item.id)} className='btn btn-danger ms-3'><i class="fa-solid fa-trash"></i></button>
          </td>
        </tr>

       ))
       
        
        }
        
        
      </tbody>
    </Table>
      </div>
    </div>
  )
}

export default Admin