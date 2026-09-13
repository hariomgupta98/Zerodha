import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h3 className="fs-3 text-center" style={{lineHeight: "1.6", fontSize: "1.1em"}}>
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h3>
      </div>
      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{lineHeight: "1.8", fontSize: "1.2em"}}>
        <div className="col-6 p-5">
          <p>
            We kick-started opertation on the 15th of August, 2010 with the goal
            of breaking all barries the traders and inverstors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing model and in-house technology have
            made us the biggest stocj broker in India.
          </p>
          <p>
            Over 1.6+ Crore client place millions of orders every day through
            our powerful ecosystem of inverstment platforms, contributing over
            15% fo all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-6 p-5">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="https://rainmatter.com/" style={{textDecoration: "none"}}>
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us or learn more about our business and product philosophies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
