import React from 'react'
import {Link , useNavigate} from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { useCart } from './ContextReducer';


function Navbar() {
  let data=useCart();
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem("authToken");
    navigate('/')
  }
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand fs-3 fxt-italic" to="/">GoFood</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
        {(localStorage.getItem('authToken'))?
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/myorder">My Orders</Link>
        </li>
        :
        ""
        }
      </ul>
         
          {(!localStorage.getItem('authToken'))?
     <div className='d-flex'>
    
          <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
          <Link className="btn bg-white text-success mx-1" to="/signup">SignUp</Link>
    
     </div>
        :
        <div>

        <div className='btn bg-white text-success mx-1'>
        
       
        <Link style={{textDecoration:"none"}} to='/cart'>My Cart</Link>
        <Badge pill bg="danger">{data.length}</Badge>
        
         
          
        
        </div>
        <div className='btn bg-white text-danger mx-1' onClick={handleLogout}>Logout</div>
        </div>
        }
       
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar