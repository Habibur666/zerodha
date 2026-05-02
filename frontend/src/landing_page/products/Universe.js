import React from "react";

export default function Universe(){
  return(
    <div className="container">
      <div className="row">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3">
          <img src="media/images/smallcaseLogo.png"></img>
          <p>Investment Platform</p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/streakLogo.png" style={{width:"40%"}}></img>
          <p>Investment Platform</p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/sensibullLogo.svg" style={{width:"60%"}}></img>
          <p>Investment Platform</p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/zerodhaFundhouse.png" style={{width:"50%"}}></img>
          <p>Investment Platform</p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/goldenpiLogo.png" style={{width:"50%"}}></img>
          <p>Investment Platform</p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/dittoLogo.png" style={{width:"35%"}}></img>
          <p>Investment Platform</p>
        </div>
        <button className="btn btn-primary p-2 mb-5" style={{ width: "20%", margin: "0 auto" }}>SignUp Now</button>
      </div>
    </div>
  )
}