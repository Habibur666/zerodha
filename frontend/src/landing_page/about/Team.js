import React from "react";

export default function Team(){
  return(
    <div className="container">
      <div className="row p-5 border-top">
        <h1 className="fs-4 text-center">People</h1>
      </div>
      <div className="row ">
        <div className="col-6 p-5 text-center">
          <img src="media/images/nithinKamath.jpg" style={{borderRadius:"50%", width:"50%"}}></img>
          <h4 className="mt-3">Nithin Kamath</h4>
          <h5>Founder, CEO</h5>
        </div>
        <div className="col-6 p-5 mt-4">
          <p>Rewriting Skills
          For some writers, it isn't getting the original words on paper that's the challenge, <br/> 
          but rewriting the first and second drafts.</p>
          <p>
          For writers looking for a way to get their creative writing juices flowing, <br/>using a 
          random paragraph can be a great way to do this.
          </p>
        </div>
      </div>
    </div>
  )
}