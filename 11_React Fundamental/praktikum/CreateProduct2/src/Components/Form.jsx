import React from "react";

export default function Form() {
  return (
    <div>
      <div className="container ps-lg-5">
        <form action="" id="formCreateProduct">
          <div className="fw-medium fs-3">Detail Product</div>
          <div className="mt-lg-4">
            <label htmlFor="" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="productName"
              style={{ width: 280 }}
            />
          </div>
          <div className="mt-lg-5">
            <label htmlFor="" className="form-label">
              Product Category
            </label>
            <select
              className="form-select"
              name=""
              id="productCategory"
              style={{ width: 280 }}
            >
              <option selected="" disabled="" value="">
                Choose...
              </option>
              <option value="a">Category a</option>
              <option value="b">Category b</option>
              <option value="c">Category c</option>
            </select>
          </div>
          <div className="mt-lg-5 mb-lg-4">
            <label htmlFor="formFile" className="form-label">
              Image of Product
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              style={{ width: 280 }}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="radio">Product Freshness</label>
            <div className="form-check" id="radio">
              <label className="form-check-label active">
                <input
                  className="form-check-input"
                  type="radio"
                  name="productStatus"
                  defaultValue="brandnew"
                />
                Brand New
              </label>
              <br />
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="radio"
                  name="productStatus"
                  defaultValue="secondhand"
                />
                Second Hand
              </label>
              <br />
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="radio"
                  name="productStatus"
                  defaultValue="refurbished"
                />
                Refurbished
              </label>
            </div>
          </div>
          <div className="mt-lg-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Additional Description
            </label>
            <textarea
              className="form-control w-50"
              id="Description"
              rows={5}
              placeholder="Description of the product"
              defaultValue={""}
            />
          </div>
          <div className="mt-lg-5">
            <label htmlFor="" className="form-label">
              Product Price
            </label>
          </div>
          <div className="input-group mb-3 w-50">
            <input
              type="text"
              className="form-control"
              id="productPrice"
              aria-label="Amount (to the nearest dollar)"
              placeholder="$"
            />
          </div>
          <div className="d-flex justify-content-center mt-lg-5">
            <button className="btn btn-primary w-50" type="submit">
              Submit
            </button>
          </div>
          <div className="mt-lg-5">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Product Name</th>
                  <th>Product Category</th>
                  <th>Image of Product</th>
                  <th>Product Freshness</th>
                  <th>Additional Description</th>
                  <th>Product Price</th>
                </tr>
              </thead>
              <tbody id="productTableBody" />
            </table>
          </div>
          {/* Search coloumn*/}
          <div className="container mt-lg-5">
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="searchInput"
                  placeholder="Search..."
                />
              </div>
              {/* Tombol Search */}
              <div className="col-auto">
                <button className="btn btn-primary" id="searchButton">
                  Search
                </button>
              </div>
              <div className="col-auto">
                {/* Tombol delete */}
                <button className="btn btn-danger" id="deleteButton">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
