import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 mt-5 border-top">
        <h1
          className="text-center"
          style={{lineHeight: "1.6", fontSize: "1.5em"}}>
          People
        </h1>
      </div>
      <div
        className="row p-3 text-muted"
        style={{lineHeight: "1.8", fontSize: "1.1em"}}>
        <div className="col-6 p-5 text-center">
          <img
            src="media/images/hariom.png"
            style={{borderRadius: "100%", width: "50%"}}
          />

          <h5 className="mt-5">Hariom Gupta</h5>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-5">
          <p>
            Hariom Gupta, I'm a Computer Science student passionate about
            building software, solving challenging problems, and learning how
            technology can be used to create meaningful products.
          </p>
          <p>
            I enjoy working with Data Structures & Algorithms and developing web
            applications. I'm constantly exploring new technologies, building
            projects, and improving my problem-solving skills.
          </p>
          <p>Currently learning, building, and improving every day.</p>
          <p>
            Connect on{" "}
            <a
              href="https://github.com/hariomgupta98"
              style={{textDecoration: "none"}}>
              GitHub
            </a>{" "}
            /{" "}
            <a
              href="https://www.linkedin.com/in/hariomgupta2756/"
              style={{textDecoration: "none"}}>
              LinkedIn
            </a>{" "}
            /{" "}
            <a href="https://x.com/@hgupt69" style={{textDecoration: "none"}}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;

