import React from 'react'
import  "./Navbar.css";
import { Link, useHistory } from 'react-router-dom';



const Navbar = () => {
  
    const history = useHistory();
    const logout= ()=>{
        localStorage.clear();
        history.push("/")
    }

  return (
    <div className="navbar">
        <div className='navbar-left'>
            <div className="navbar-name">URL Shortner</div>
    
             </div>
        <div className='navbar-right'> 
        <div className="navbar-list" >
        <ul style={{listStyleType:"none"}}>
        <Link  to="/Home">   <li>Home</li> </Link>
          <Link  to="/Dashboard"> <li>Dashboard</li></Link>
           <Link  to="/About"> <li>About</li></Link>
           <Link  to="/Profile"> <li>Profile</li></Link>
           <li  onClick={()=>logout()}>Logout</li>
          
        </ul>
        </div>
        </div>
    </div>
  )
}

export default Navbar