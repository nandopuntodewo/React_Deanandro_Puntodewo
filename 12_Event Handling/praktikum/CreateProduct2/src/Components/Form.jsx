import React, { useState } from "react";

export default function Form({ addData }) {
  const [productName, setProductName] = useState("");
  const [productcategory, setProductCategory] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const specialchars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

  const [isProductNameValid, setIsProductNameValid] = useState(true);

  // State untuk menyimpan pesan kesalahan
  const [productNameError, setProductNameError] = useState("");

  function handleProductNameChange(event) {
    const value = event.target.value;
    setProductName(value);

    // Validasi panjang Product Name
    if (value.length > 25) {
      setProductNameError("Product Name must not exceed 25 characters.");
    } else {
      setProductNameError("");
    }
  }

  // State untuk menyimpan nilai random number
  const [randomNumber, setRandomNumber] = useState(null);
  const [isGenerateButtonClicked, setIsGenerateButtonClicked] = useState(false);

  // Fungsi untuk menghasilkan random number dan menampilkannya di console
  function generateRandomNumber() {
    setIsGenerateButtonClicked(true);
    const random = Math.floor(Math.random() * 100); // Anda bisa mengganti 100 dengan batas angka yang Anda inginkan
    console.log("Random Number:", random);
    setRandomNumber(random);
  }

  function handleValidation() {
    if (isGenerateButtonClicked) {
      return true; // Jika tombol Generate Random Number ditekan, abaikan validasi
    }
    // Validasi Lainnya
    if (productName.length === 0) {
      setProductNameError("Please enter a valid product name.");
      setIsProductNameValid(false); // Menandakan bahwa Product Name tidak valid
      return false;
    }
    if (productName.length > 25) {
      setProductNameError("Product Name must not exceed 25 characters.");
      setIsProductNameValid(false); // Menandakan bahwa Product Name tidak valid
      return false;
    }
    if (productName.match(specialchars)) {
      setProductNameError("Product Name cannot contain special characters.");
      setIsProductNameValid(false); // Menandakan bahwa Product Name tidak valid
      return false;
    } else if (productcategory.length == 0) {
      alert("Kategori produk harus diisi");
    } else if (productImage.length == 0) {
      alert("Kolom gambar produk harus diisi");
    } else if (productFreshness.length == 0) {
      alert("Kolom kesegaran produk harus diisi");
    } else if (productDesc.length == 0) {
      alert("Kolom Deskripsi Tambahan harus diisi");
    } else if (productPrice.length == 0) {
      alert("Harap masukkan harga produk yang valid");
    } else {
      return true;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!handleValidation()) {
      return;
    }
    if (!isGenerateButtonClicked) {
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
              className={`form-control ${
                isProductNameValid ? "" : "is-invalid"
              }`}
              id="productName"
              style={{ width: 280 }}
              value={productName}
              onChange={handleProductNameChange}
            />
            {productNameError && (
              <p className="text-danger">{productNameError}</p>
            )}
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
          {/* Tombol Generate Random Number */}
          <div className="d-flex justify-content-center mt-lg-5">
            <button
              className="btn btn-success w-50"
              onClick={generateRandomNumber}
            >
              Generate Random Number
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
