import React from 'react'
import { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
   let navigate=useNavigate();
  const handleSubmit = async (e) => { //This function takes one parameter, conventionally named e, representing the event object. In JavaScript event handling, the event object is automatically passed to the event handler function and contains information about the event (in this case, a form submission).
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/loginuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    })
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert('Enter Valid Details')
    }
    else{
      localStorage.setItem("userEmail" , credentials.email);
      localStorage.setItem("authToken" , json.authToken);
      navigate('/')
    }
  }
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className='container'>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" name='email' value={credentials.email} onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" name='password' value={credentials.password} onChange={handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to='/signup' className='m-3 btn btn-danger'>Sign Up</Link>
      </form>
    </div>
  )
}

export default Login