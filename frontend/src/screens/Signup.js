import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    const [credentials, setCredentials]=useState({name:"" , email:"" , password:"" , geolocation:""});
    const handleSubmit = async (e)=>{ //This function takes one parameter, conventionally named e, representing the event object. In JavaScript event handling, the event object is automatically passed to the event handler function and contains information about the event (in this case, a form submission).
        e.preventDefault(); 
        const response= await fetch('http://localhost:5000/api/createuser' , {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credentials.name , email:credentials.email , password:credentials.password , location:credentials.geolocation})
        })
        const json=await response.json();
        console.log(json);
        if(!json.success){
          alert('Enter Valid Details')
        }
        
    }
    const handleChange = (e) => {
      setCredentials({
          ...credentials,
          [e.target.name]: e.target.value 
      });
  }
  
  return (
    <>
    <div className='container'>

       <form onSubmit={handleSubmit}>
       <div className="mb-3">
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control" name='name' value={credentials.name} onChange={handleChange} placeholder="Enter Name"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" name='email' value={credentials.email} onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" name='password' value={credentials.password} onChange={handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1">Address</label>
    <input type="text" name='geolocation' value={credentials.geolocation} onChange={handleChange} className="form-control" placeholder="Enter your Location"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to='/login' className='m-3 btn btn-danger'>Already a user?</Link>
</form>
    </div>
    </>
  )
}

export default Signup