import React from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../Components/ProductContext"; // Ganti dengan import sesuai struktur proyek Anda

function ProductDetail() {
  const { id } = useParams();
  const { products } = useProductContext(); // Ganti dengan cara Anda mengakses data produk

  // Temukan produk dengan ID yang sesuai dari array produk
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <p>Product not found</p>;
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
