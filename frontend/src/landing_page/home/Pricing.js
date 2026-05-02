import React from 'react'

export default function Pricing(){
  return(
    <div className='container'>
      <div className='row'>
        <div className='col-4'>
          <h3>Customer-first always</h3>
          <p className='text-muted'>That's why 1.3+ crore customer trust Zerodha with 3.5+lakh crore worth of equity investment.</p>
          <a href='' className='mx-4'  style={{textDecoration:"none"}}>Explore Our product<i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className='col-2'></div>
        <div className='col-6 mb-5'>
          <div className='row text-center'>
            <div className='col p-2 border'>
              <h1 className='mb-3'>₹0</h1>
              <p>Free equity delivary <br/>and direct mutual funds</p>
            </div>
            <div className='col p-2 border'>
              <h1 className='mb-3'>₹20</h1>
              <p>Free equity delivary </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}