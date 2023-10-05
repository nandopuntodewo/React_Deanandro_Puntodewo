import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct, editProduct } from "../redux/actions";

const schema = z.object({
  productName: z
    .string()
    .min(1, { message: "Product Name Field Can't be Empty" })
    .max(25, { message: "Product name must not exceed 25 character" }),
  productCategory: z
    .string()
    .min(1, { message: "Product Category field must be filled in" }),
  productImage: z
    .any()
    .refine((val) => val.length > 0, "Product image field must be filled in"),
  productFreshness: z
    .string()
    .min(1, { message: "Product freshness field must be filled in" }),
  productDesc: z
    .string()
    .min(1, { message: "Additional Description field must be filled in" }),
  productPrice: z
    .string()
    .min(1, { message: "Please enter a valid product price" }),
});

function generateRandomNumber() {
  const number = Math.random() * 10;
  return console.log(number);
}

export default function Form() {
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.products);
  const [editIndex, setEditIndex] = useState(null);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    alert("Welcome");
  }, []);

  function handleDelete(index) {
    alert("Data Deleted");
    dispatch(deleteProduct(index)); // Menghapus produk dari Redux store
  }

  function handleEdit(index) {
    const productToEdit = tableData[index];
    setEditIndex(index);
    reset({
      productName: productToEdit.productName,
      productCategory: productToEdit.productCategory,
      productFreshness: productToEdit.productFreshness,
      productPrice: productToEdit.productPrice,
      image: productToEdit.image,
      additionalDescription: productToEdit.productDesc,
    });
    // Mengirim aksi Redux untuk mengedit produk
    dispatch(editProduct(index, productToEdit));
  }

  const onSubmit = (data) => {
    alert("Form Submitted");
    if (editIndex !== null) {
      dispatch(editProduct(editIndex, data))
      setEditIndex(null);
      
    } else {
      // const newProduct = {
      //   id: uuidv4(), // Menghasilkan ID unik
      //   productName: data.productName,
      //   productCategory: data.productCategory,
      //   productFreshnes:data.productFreshnes,
      //   productPrice:data.productPrice,
      //   image:data.image,
      //   additionalDescription:data.additionalDescription,
      // }

      dispatch(addProduct(data));
    }
    reset();
  };
 
  return (
    <>
      <Navbar />
      <Header />
      <div className="container ps-lg-5">
        <form action="" id="form" onSubmit={handleSubmit(onSubmit)} aria-label="product-form">
          <div className="fw-medium fs-3">Detail Product</div>
          <div className="mt-lg-4">
            <label htmlFor="productname" className="form-label">
              Product Name
            </label>
            <input
              {...register("productName")}
              type="text"
              className="form-control"
              id="productname"
              style={{ width: 280 }}
              aria-label="input-product-name"
            />
            {errors.productName?.message && (
              <div className="text-danger">{errors.productName?.message}</div>
            )}
          </div>
          <div className="mt-lg-5">
            <label htmlFor="" className="form-label">
              Product Category
            </label>
            <select
              className="form-select"
              name=""
              id="productcategory"
              style={{ width: 280 }}
              {...register("productCategory")}
              aria-label="input-product-category"
            >
              <option disabled value="">
                Choose...
              </option>
              <option value="a">Category a</option>
              <option value="b">Category b</option>
              <option value="c">Category c</option>
            </select>
            {errors.productCategory?.message && (
              <div className="text-danger">
                {errors.productCategory?.message}
              </div>
            )}
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
              {...register("productImage")}
            />
            {errors.productImage?.message && (
              <div className="text-danger">{errors.productImage?.message}</div>
            )}
          </div>
          <div className="">
            <label htmlFor="" className="form-label" aria-label="product-freshness-radio">
              Product Freshness
            </label>
          </div>
          <div className="form-check" name="formcheck" id="radio">
            <label className="form-check-label active">
              {" "}
              <input
                className="form-check-input"
                type="radio"
                name="Freshness"
                defaultValue="brandnew"
                {...register("productFreshness")}
              />{" "}
              Brand New{" "}
            </label>{" "}
            <br />
            <label className="form-check-label">
              {" "}
              <input
                className="form-check-input"
                type="radio"
                name="Freshness"
                defaultValue="secondhand"
                {...register("productFreshness")}
              />{" "}
              Second Hand{" "}
            </label>{" "}
            <br />
            <label className="form-check-label">
              {" "}
              <input
                className="form-check-input"
                type="radio"
                name="Freshness"
                defaultValue="refurbished"
                {...register("productFreshness")}
              />{" "}
              Refurbished{" "}
            </label>
            {errors.productFreshness?.message && (
              <div className="text-danger">
                {errors.productFreshness?.message}
              </div>
            )}
          </div>
          <div className="mt-lg-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Additional Description
            </label>
            <textarea
              className="form-control w-50"
              id="textarea"
              rows={5}
              placeholder="Description of the product"
              defaultValue={""}
              {...register("productDesc")}
            />
            {errors.productDesc?.message && (
              <div className="text-danger">{errors.productDesc?.message}</div>
            )}
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
              id="productprice"
              aria-label="Amount (to the nearest dollar)"
              placeholder="$"
              {...register("productPrice")}
            />
          </div>
          {errors.productPrice?.message && (
            <div className="text-danger">{errors.productPrice?.message}</div>
          )}
          <div className="d-flex justify-content-center mt-lg-5">
            <button className="btn btn-primary w-50" type="submit">
              {editIndex !== null ? "Update" : "Submit"}
            </button>
          </div>
        </form>
        <div className="d-flex justify-content-center mt-lg-5">
          <button
            className="btn btn-success w-50"
            onClick={generateRandomNumber}
          >
            Generate Random Number
          </button>
        </div>
        <div className="container table mt-lg-5">
          <table className="table table-striped-columns" id="tableinput">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Category</th>
                <th scope="col">Product Freshness</th>
                <th scope="col">Product Price ($)</th>
                <th scope="col">Action</th>
                <th scope="col">Detail</th>
              </tr>
            </thead>
            <tbody>
              {tableData.length > 0 ? (
                tableData.map((data, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data && data.productName}</td>
                    <td>{data && data.productCategory}</td>
                    <td>{data && data.productFreshness}</td>
                    <td>{data && data.productPrice}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm me-1"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <Link to={`/product/${index}`}>View Detail</Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

