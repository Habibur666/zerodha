import React from 'react'

export default function Education(){
  return(
    <div className='container mt-5'>
      <div className='row '>
        <div className='col-6'>
          <div className='row text-center'>
            <img src='media/images/education.svg' style={{width:"80%"}}></img>
          </div>
        </div>
        <div className='col-6 mt-3'>
          <h3>Customer-first always</h3>
          <p className='text-muted'>That's why 1.3+ crore customer trust Zerodha with 3.5+lakh crore worth of equity investment.</p>
          <a href='' className='mx-4'  style={{textDecoration:"none"}}>Explore Our product<i class="fa-solid fa-arrow-right"></i></a>
          <h3>Customer-first always</h3>
          <p className='text-muted'>That's why 1.3+ crore customer trust Zerodha with 3.5+lakh crore worth of equity investment.</p>
          <a href='' className='mx-4'  style={{textDecoration:"none"}}>Explore Our product<i class="fa-solid fa-arrow-right"></i></a>
        </div> 
      </div>
    </div>
  )
}