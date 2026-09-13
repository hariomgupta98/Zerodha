import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 mx-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="https://zrd.sh/signup" style={{textDecoration: "none"}}>
          Track Tickects
        </a>
      </div>
      <div className="row p-5 mt-3">
        <div className="col-6 p-5">
          <h2 className="fs-3 mb-3">
            Search for an answer or browse help topics to create a tickets
          </h2>
          <input placeholder="Eg. How do I open my account, How do i activate F&O.." />
          <br />
          <a href=''>Track account opening</a><br/>
          <a href="">Track segment activation</a><br/>
          <a href="">Intraday margins</a><br/>
          <a href="">Kite usere manual</a><br/>
        </div>
        <div className="col-6 p-5">
          <h2 className="fs-3">Featured</h2>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - August 2026</a>
            </li>
            <li>
              {" "}
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
