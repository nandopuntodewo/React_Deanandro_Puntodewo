import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../Components/ProductContext";

 function ProductDetail() {
  const { tableData } = useProductContext();
  const { id } = useParams();

  // Pastikan tableData ada dan tidak null
  if (!tableData) {
    return <div>Loading...</div>;
  }

  // Cari produk berdasarkan ID
  const product = tableData.find((item) => item.id === id);

  // Pastikan product ditemukan sebelum mengakses properti
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
