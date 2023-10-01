import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../redux/actions";
import CreateProduct from "./CreateProduct";

function ListProduct() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const [isCreateFormVisible, setCreateFormVisible] = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  const handleShowCreateForm = () => {
    setCreateFormVisible(true);
    setEditProduct(null);
  };

  const handleEditProduct = (product) => {
    setEditProduct(product);
    setCreateFormVisible(true);
  };

  const handleDeleteProduct = (index) => {
    dispatch(deleteProduct(index));
  };

  return (
    <div>
      <h2>Product List</h2>
      <button onClick={handleShowCreateForm}>Add Product</button>
      {isCreateFormVisible && (
        <CreateProduct
          product={editProduct}
          onClose={() => {
            setCreateFormVisible(false);
            setEditProduct(null);
          }}
        />
      )}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Image of Product</th>
            <th>Product Freshness</th>
            <th>Additional Description</th>
            <th>Product Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.productName}</td>
              <td>{product.productCategory}</td>
              <td>{product.Imaget}</td>
              <td>{product.productFreshness}</td>
              <td>{product.productDesc}</td>
              <td>{product.productPrice}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm me-1"
                  onClick={() => handleDeleteProduct(index)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => handleEditProduct(product)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListProduct;
