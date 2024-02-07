import React from 'react'
import './Nav.css'

export default function Footer() {
  return ( <>
  <div className='foot'>
          <div className="container py-5">
              <div className="row ">
              <div className="col-md-4">
                  <div  className='part '>
                  <h2 className='py-2'>Location</h2>
                      <p>2215 John Daniel Drive</p>
                      <p>Clark, MO 65243</p>
                  </div>
                      
                    </div>
                    <div className="col-md-4 ">
                      <div className='part '>
                      <h2 className='my-2'>About the web</h2>
                     <div className='footer-icon d-flex text-align-center '>
                     <i class="fa-brands fa-facebook mx-1 icon"></i>
                     <i class="fa-brands fa-twitter mx-1 icon"></i>
                     <i  class="fa-brands fa-linkedin-in mx-1 icon"></i>
                     <i  class="fa-solid fa-globe mx-1 icon"></i>
                      </div>
                     
                     </div>
                    </div>
                    <div className="col-md-4">
                      <div className='part justify-content-center text-center'>
                      <h2 className='my-2'>ABOUT FREELANCER</h2>
                     <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                      </div>
                    
                    </div>
              </div>
              
          </div>
          <div className="text-center endfooter py-2">
          <h6>Copyright © Your Website 2021</h6>
          </div>
          </div>
          </>
  )
}
