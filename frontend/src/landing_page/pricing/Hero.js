import React from "react";

export default function Hero(){
  return(
    <div className="container mt-5">
       <div className="row p-5 text-center border-bottom">
          <h1>Pricing</h1>
          <p className="text-muted mb-5">Free equity investment and flat ₹20 trading and F&O trades</p>
       </div>
       <div className="row p-5">
         <div className="col-4">
          <img src="media/images/pricingEquity.svg"></img>
          <h2 className="fs-3">Free Equity Delivery</h2>
          <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.</p>
         </div>
         <div className="col-4">
            <img src="media/images/intradayTrades.svg"></img>
            <h2 className="fs-3">Intradey and F&O trades</h2>
            <p className="text-muted">Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.</p>
         </div>
         <div className="col-4">
            <img src="media/images/pricingMF.svg"></img>
            <h2 className="fs-3 mx-5">Free direct MF</h2>
            <p className="text-muted mx-4">All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.</p>
         </div>
       </div>
    </div>
  )
}