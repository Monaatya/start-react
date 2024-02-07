import React from 'react'
import '../Home/Home.css'

export default function About() {
  return (
    <>
    <div className='title-about text-center text-align-center justify-content-center d-flex'>
    <div className="container">
        <div className="row gx-5">
            <div className="col-md-10 m-auto text-center title  my-3">
            <h1>ABOUT COMPONENT</h1> 
       <i class=" fa-solid fa-star "></i>
            </div>
            <div className="col-md-5 m-auto text-start">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes 
        the complete source files including HTML, CSS, and JavaScript as well as  
        optional SASS stylesheets for easy customization.</p> 
            </div>

            <div className="col-md-5 m-auto text-start">
            <p>Freelancer is a free bootstrap theme created by Route. The download <br></br>  includes 
        the complete source files including HTML, CSS, and JavaScript <br></br>
        as well as optional SASS stylesheets for easy customization.</p> 
            </div>
            </div>
        </div>
     </div>
    
 
   
    </>
  )
}
