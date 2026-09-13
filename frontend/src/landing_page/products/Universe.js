import React from "react";

function Universe() {
  return (
   <div className="container mt-5">
      <div className="row text-center">
        <h2 className='text-muted'>The Zerodha Universe</h2>
        <p className="mt-2">Extend your trading and investment experience even further with our partner platforms</p>
        
        <div className="col-4 p-3 mt-5">
          <img src="media\images\zerodhaFundhouse.png" style={{width: "190px"}}/>
          <p className='text-samll text-muted mt-3'>Our asset management venture <br/>that is creating simple and transparent index <br/>funds to help you save for your goals.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\images\sensibullLogo.svg" style={{width: "200px"}}/>
          <p className='text-samll text-muted mt-3'>Options trading platform that lets you<br/> creats strategies, analyze positions, and examine<br/>data points like open interst, FII/DII, and more.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\images\streakLogo.png" style={{width: "190px"}}/>
          <p className='text-samll text-muted mt-3'>Systematic trading platform<br/>that allows you to create and backtest<br/>strategies without coding.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\images\smallcaseLogo.png" style={{width: "190px"}}/>
          <p className='text-samll text-muted mt-3'>Thematic inversting platform<br/>that helps you invest in diversified<br/>baskets of stocks on ETFs.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\images\tijori.svg" style={{width: "190px"}}/>
          <p className='text-samll text-muted mt-3'>Inverstment research platform<br/>that offers detailed insights on stocks,<br/>sectors, supply chains, and more.</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\images\dittoLogo.png" style={{width: "160px"}}/>
          <p className='text-samll text-muted mt-3'>Personalized advice on life<br/>and health insurance. No spam<br/>and no mis-selling.</p>
        </div>
        <button  className='p-2 btn btn-primary fs-5 mb-5 mt-5'  style={{width:"20%", margin:"0 auto"}}>Signup Now</button>
      </div>
    </div>
  );
}

export default Universe;