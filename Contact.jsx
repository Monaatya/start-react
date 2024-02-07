import React from 'react'
import './contact.css'
export default function Contact() {
  return (
    <>
       <div className='contact'>
    <h1 className=' text-center'>CONATCT SECTION</h1>
    <i class=" fa-solid fa-star "></i>
    </div>
    <div id='contact'>
   <div className="container">
    <div className="row">
      <div className="col-md-7 m-auto">
      <div className="form py-5 mt-4 w-75 m-auto">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputName"
                  placeholder="userName"
                />
                <label for="floatingInput">userName :</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputAge"
                  placeholder="userAge"
                />
                <label for="floatingPassword">userAge :</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingEmail"
                  placeholder="userEmail"
                />
                <label for="floatingPassword">userEmail :</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPasswordPassword"
                  placeholder="userPassword"
                />
                <label for="floatingPassword">userPassword :</label>
              </div>
              <button type="button" className="btn">
                Send Message
              </button>
            </div>
      </div>
    </div>
   </div>
   </div>
    </>
  )
}
