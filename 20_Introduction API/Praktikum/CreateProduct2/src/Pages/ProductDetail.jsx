import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams(); // Mendapatkan ID produk dari URL
  const product = useSelector((state) =>
    state.products.find((product) => product.id === id)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>Product Detail</h2>
      <h3>Name: {product.productName}</h3>
      <p>Category: {product.productCategory}</p>
      <p>Freshness: {product.productFreshness}</p>
      <p>Description: {product.productDesc}</p>
      <p>Price: ${product.productPrice}</p>
      <img src={product.productImage} alt={product.productName} />
    </div>
  );
}

export default ProductDetail;
