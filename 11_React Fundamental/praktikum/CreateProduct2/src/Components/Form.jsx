import React, { useState } from "react";

export default function Form({ addData }) {
  const [productName, setProductName] = useState("");
  const [productcategory, setProductCategory] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const specialchars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  function handleValidation() {
    if (productName.length == 0) {
      alert("Product Name Field Can't be Empty");
    } else if (productName.length > 25) {
      alert("Product name must not exceed 25 character");
    } else if (productName.match(specialchars)) {
      alert("Prodcut name must not contain symbols");
    } else if (productcategory.length == 0) {
      alert("Product Category field must be filled in");
    } else if (productImage.length == 0) {
      alert("Product image field must be filled in");
    } else if (productFreshness.length == 0) {
      alert("Product freshness field must be filled in");
    } else if (productDesc.length == 0) {
      alert("Additional Description field must be filled in");
    } else if (productPrice.length == 0) {
      alert("Please enter a valid product price");
    } else {
      return true;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
  
    if (!handleValidation()) {
      return;
    }
  
    // Membuat objek data baru
    const newData = {
      productName: productName,
      productCategory: productcategory,
      productImage: productImage,
      productFreshness: productFreshness,
      productDesc: productDesc,
      productPrice: productPrice,
    };
  
    // Menambahkan data baru ke dalam tabel
    const tableBody = document.getElementById("productTableBody");
    const newRow = tableBody.insertRow();
  
    // Menambahkan data ke dalam sel-sel tabel
    const cellIndex = newRow.insertCell(0);
    const cellName = newRow.insertCell(1);
    const cellCategory = newRow.insertCell(2);
    const cellImage = newRow.insertCell(3);
    const cellFreshness = newRow.insertCell(4);
    const cellDescription = newRow.insertCell(5);
    const cellPrice = newRow.insertCell(6);
  
    // Mengisi data ke dalam sel-sel tabel
    cellIndex.innerHTML = tableBody.rows.length; // Nomor urut
    cellName.innerHTML = productName;
    cellCategory.innerHTML = productcategory;
    cellImage.innerHTML = `<img src="${productImage}" alt="${productName}" width="50">`;
    cellFreshness.innerHTML = productFreshness;
    cellDescription.innerHTML = productDesc;
    cellPrice.innerHTML = productPrice;
  
    // Mengosongkan formulir setelah data ditambahkan
    setProductName("");
    setProductCategory("");
    setProductImage("");
    setProductFreshness("");
    setProductDesc("");
    setProductPrice("");
  
    event.target.reset();
  
  
  }

  return (
    <div>
      <div className="container ps-lg-5">
        <form action="" id="formCreateProduct" onSubmit={handleSubmit}>
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
              onChange={(e) => setProductName(e.target.value)}
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
              onChange={(e) => setProductCategory(e.target.value)}
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
              onChange={(e) => setProductImage(e.target.value)}
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
                  onChange={(e) => setProductFreshness(e.target.value)}
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
                  onChange={(e) => setProductFreshness(e.target.value)}
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
                  onChange={(e) => setProductFreshness(e.target.value)}
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
              onChange={(e) => setProductDesc(e.target.value)}
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
              onChange={(e) => setProductPrice(e.target.value)}
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
