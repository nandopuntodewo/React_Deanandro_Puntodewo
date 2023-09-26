import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();

  const handleNavigate = (to) => {
    navigate(to);
  };

  return (
    <>
      
        <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong pt-4">
          <div className="container-fluid ps-5">
            <div
              className="collapse navbar-collapse justify-content-end pe-5"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav gap-5">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  onClick={() => handleNavigate("/")}
                >
                  Home
                </a>
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  onClick={() => handleNavigate("/CreateProduct")}
                >
                  Create Products
                </a>
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  onClick={() => handleNavigate("/about")}
                >
                  About
                </a>
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="contact.html"
                >
                  Contacts
                </a>
              </div>
            </div>
          </div>
        </nav>

    </>
  );
}
