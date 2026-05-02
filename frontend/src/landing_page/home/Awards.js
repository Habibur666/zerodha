import React from 'react'

export default function Awards(){
  return(
    <div className='container mt-5'>
       <div className='row'>
          <div className='col-6'>
            <img src='media/images/largestBroker.svg'></img>
          </div>
          <div className='col-6 mt-5'>
            <h1>Largest Stock broker in India</h1>
            <p>2+ million Zerodha contribute to oover 15% of all over India daily by trading and investing in:</p>
            <div className='row'>
              <div className='col-6'>
                <ul>
                  <li>
                    <p>Features and options</p>
                  </li>
                  <li>
                    <p>Comodative derivative</p>
                  </li>
                  <li>
                    <p>Currency derivative</p>
                  </li>
                </ul>
              </div>
              <div className='col-6'>
                <ul>
                  <li>
                    <p>Stocks and IPOs</p>
                  </li>
                  <li>
                    <p>Direct mutual funds</p>
                  </li>
                  <li>
                    <p>Bonds and Govt</p>
                  </li>
                </ul>
              </div>
            </div>
            <img src='media/images/pressLogos.png' style={{width:"80%"}}></img>
          </div>
       </div>
    </div>
  )
}