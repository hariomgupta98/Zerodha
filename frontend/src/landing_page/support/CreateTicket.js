// Hero.js
import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
            <i class="fa fa-plus-circle" aria-hidden="true"></i>
            Account Opening
          </h4>
          <a href="https://zerodha.com/open-account/minor/" style={{textDecoration:'none', lineHeight:'2.5'}}>Online Account Opening</a><br/>
          <a href="https://zerodha.com/open-account/" style={{textDecoration:'none', lineHeight:'2.5'}}>Offline Account Opening</a><br/>
          <a href="https://zerodha.com/open-account/nri/" style={{textDecoration:'none', lineHeight:'2.5'}}>Company, Partnership and HUF Account Opening</a><br/>
          <a href="https://zerodha.com/open-account/huf/" style={{textDecoration:'none', lineHeight:'2.5'}}>NRI Account Opening</a> <br/>
         <a href="https://zerodha.com/commodities/" style={{textDecoration:'none', lineHeight:'2.5'}}>Charges at Zerodha</a><br/>
          <a href="https://zerodha.com/dematerialise/" style={{textDecoration:'none', lineHeight:'2.5'}}>Zerodha IDFC FIRST Bank 3-in-1 Account</a><br/>
          
         <a href="https://zerodha.com/mtf/" style={{textDecoration:'none', lineHeight:'2.5'}}>Getting Started</a><br/>
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
            <i class="fa fa-user-o" aria-hidden="true"></i>
            Your Zerodha Account
          </h4>
          <a href="https://support.zerodha.com/category/your-zerodha-account/your-profile" style={{textDecoration:'none', lineHeight:'2.5'}}>Login Credentials</a><br/>
          <a href="https://support.zerodha.com/category/your-zerodha-account/account-modification-and-segment-addition" style={{textDecoration:'none', lineHeight:'2.5'}}>Account Modification and Segment Addition</a><br/>
          <a href="https://support.zerodha.com/category/your-zerodha-account/dp-id-and-bank-details" style={{textDecoration:'none', lineHeight:'2.5'}}>DP ID and bank deltails</a><br/>
          <a href="https://support.zerodha.com/category/your-zerodha-account/nomination-process" style={{textDecoration:'none', lineHeight:'2.5'}}>Nomination</a> <br/>
         <a href="https://support.zerodha.com/category/your-zerodha-account/transfer-of-shares-and-conversion-of-shares" style={{textDecoration:'none', lineHeight:'2.5'}}>Transfer and conversion of shares</a><br/>
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
            <i class="fa fa-bar-chart" aria-hidden="true"></i>
            Kite
          </h4>
          <a href="https://support.zerodha.com/category/trading-and-markets/ipo" style={{textDecoration:'none', lineHeight:'2.5'}}>IPO</a><br/>
          <a href="https://support.zerodha.com/category/trading-and-markets/trading-faqs" style={{textDecoration:'none', lineHeight:'2.5'}}>Trading FAQs</a><br/>
          <a href="https://support.zerodha.com/category/trading-and-markets/margins" style={{textDecoration:'none', lineHeight:'2.5'}}>Margin Trading Facility (MTF) and Margins</a><br/>
          <a href="https://support.zerodha.com/category/trading-and-markets/charts-and-orders" style={{textDecoration:'none', lineHeight:'2.5'}}>Charts and orders</a> <br/>
         <a href="https://support.zerodha.com/category/trading-and-markets/alerts-and-nudges" style={{textDecoration:'none', lineHeight:'2.5'}}>Alerts and Nudges</a><br/>
          <a href="https://support.zerodha.com/category/trading-and-markets/general-kite" style={{textDecoration:'none', lineHeight:'2.5'}}>General</a><br/>

        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
           <i class="fa fa-pie-chart" aria-hidden="true"></i>
           Funds
          </h4>
          <a href="https://support.zerodha.com/category/funds/adding-funds" style={{textDecoration:'none', lineHeight:'2.5'}}>Add money</a><br/>
          <a href="https://support.zerodha.com/category/funds/fund-withdrawal" style={{textDecoration:'none', lineHeight:'2.5'}}>Withdraw money</a><br/>
          <a href="https://support.zerodha.com/category/funds/adding-bank-accounts" style={{textDecoration:'none', lineHeight:'2.5'}}>Add bank accounts</a><br/>
          <a href="https://zerodha.com/open-account/huf/" style={{textDecoration:'none', lineHeight:'2.5'}}>eMandates</a> <br/>
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
           <i class="fa fa-connectdevelop" aria-hidden="true"></i>
            Console
          </h4>
          <a href="https://support.zerodha.com/category/console/portfolio" style={{textDecoration:'none', lineHeight:'2.5'}}>Portfolio</a><br/>
          <a href="https://support.zerodha.com/category/console/corporate-actions" style={{textDecoration:'none', lineHeight:'2.5'}}>Corporate actions</a><br/>
          <a href="https://support.zerodha.com/category/console/ledger" style={{textDecoration:'none', lineHeight:'2.5'}}>Funds statement</a><br/>
          <a href="https://support.zerodha.com/category/console/reports" style={{textDecoration:'none', lineHeight:'2.5'}}>Reports</a> <br/>
         <a href="https://support.zerodha.com/category/console/profile" style={{textDecoration:'none', lineHeight:'2.5'}}>Profile</a><br/>
          <a href="https://support.zerodha.com/category/console/segments/" style={{textDecoration:'none', lineHeight:'2.5'}}>Segments</a><br/>
        </div>
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="">
            <i class="fa fa-money" aria-hidden="true"></i>
            Coins
          </h4>
          <a href="https://support.zerodha.com/category/mutual-funds/understanding-mutual-funds" style={{textDecoration:'none', lineHeight:'2.5'}}>Mutual funds</a><br/>
          <a href="https://support.zerodha.com/category/mutual-funds/nps" style={{textDecoration:'none', lineHeight:'2.5'}}>National Pension Scheme (NPS)</a><br/>
          <a href="https://support.zerodha.com/category/mutual-funds/fixed-deposits" style={{textDecoration:'none', lineHeight:'2.5'}}>Fixed Deposit (FD)</a><br/>
          <a href="https://support.zerodha.com/category/mutual-funds/features-on-coin" style={{textDecoration:'none', lineHeight:'2.5'}}>Features on Coin</a> <br/>
         <a href="https://support.zerodha.com/category/mutual-funds/payments-and-orders" style={{textDecoration:'none', lineHeight:'2.5'}}>Payments and Orders</a><br/>
          <a href="https://support.zerodha.com/category/mutual-funds/coin-general" style={{textDecoration:'none', lineHeight:'2.5'}}>General</a><br/>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
