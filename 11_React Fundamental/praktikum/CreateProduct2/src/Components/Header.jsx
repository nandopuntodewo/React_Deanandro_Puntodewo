import React from "react";

export default function Header() {
  return (
    <div>
      <div className="container p-lg-5">
        <div className="text-center">
          <img src="images/bootstrap-logo.png" alt="logo" />
        </div>
        <div className="text-center mt-lg-3">
          <p className="fw-medium fs-3">Create Product</p>
          <p className="text-secondary-emphasis fs-4" />
        </div>
      </div>
    </div>
  );
}
