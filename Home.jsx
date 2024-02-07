import React from 'react'
import './Home.css'



export default function Home() {
  return ( <>
    <div className='about text-center text-align-center justify-content-center d-flex '>
      <div>
      <img src="/img/Avatar.svg" className='aboutimg' alt="about-img" />
      </div>
       <div className='star-about '>
       <h1>START FRAMEWORK</h1> 
       <i class=" fa-solid fa-star "></i>
       </div>
      <p>Graphic Artist - Web Designer - Illustrator</p>
    </div>
    </>
  )

}
