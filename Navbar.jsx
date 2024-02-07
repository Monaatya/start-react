import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Nav.css';


export default function Navbar() {
  const [pathName, setPathname] = useState(window.location.pathname)
  return (
    <>
     <nav className="navStyle navbar navbar-expand-lg py-3 ">
  <div className="container">
    <Link onClick={ () => {setPathname("/")}} className="navbar-brand text-light title" to={"/"} >SMART FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link onClick={ () => {setPathname("/about")}} className={ pathName == "/about" ? "nav-link active text-light px-2" : "nav-link text-light px-2"}  aria-current="page" to={"/about"}>About</Link>
        </li>
        <li className="nav-item">
          <Link onClick={() => {setPathname("/portfolio")}}  className={ pathName == "/portfolio" ? "nav-link active text-light px-2 " : "nav-link text-light px-2"} to={"/portfolio"} >Portfolio</Link>
        </li> 
         <li className="nav-item">
          <Link onClick={() => {setPathname("/contact")}}  className={ pathName == "/contact" ? "nav-link active text-light px-2" : "nav-link text-light px-2"} to={"/contact"} > Contact</Link>
        </li>
       
        
       </ul>
    </div>
  </div>
</nav>
    </>
  )
}
