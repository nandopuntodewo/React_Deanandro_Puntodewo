import React from "react";
import Nav from "../Components/landingNav";
import Footer from "../Components/footer";

function Page() {
  return (
    <>
      <div className="bg">
      <Nav />
      <div>
        <div className="content">
          <div className="container text-light text-center">
            <p className="display-5 fw-bold">WELCOME TO DEANANDRO'S WEBSITE</p>
            <p className="fw-light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae eos ullam est dolor architecto blanditiis.
            </p>
            <button className="btn btn-info mt-4">Get Started</button>
          </div>
        </div>
      </div>
      </div> 
      <Footer />
    </>
  );
}

export default Page;
