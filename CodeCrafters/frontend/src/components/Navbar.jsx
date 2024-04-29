import React from 'react'
import funstions from "../functions/Functions"
import { Link } from 'react-router-dom'

const Navbar = () => {
  let {addClass,toggleClass} = funstions()
  return (
    <>
      <div className="navbar"> 
        <div className="logo">
          <h3>CodeCrafters.</h3>
        </div>

        <div className="links">
          <ul>
            <li><Link to="/" href="">home</Link></li>
            <li><a href="">about</a></li>
            <li><a href="">courses</a></li>
            <li><a href="">products</a></li>
            <li><Link to="/templates">Templates</Link></li>
            <li><Link to="">contact</Link></li>
          </ul>
        </div>

        <div className="buttons flex items-center gap-3">
          <button className="btn text-center"><p>Get Started</p></button>
          <i className="ri-menu-3-fill menuBtn" onClick={()=>toggleClass(".links","active")}></i>
        </div>


      </div>
    </>
  )
}

export default Navbar