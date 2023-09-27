import { useParams } from "react-router-dom";
import { useProductContext } from "../Components/ProductContext";

function ProductDetail() {
  const { id } = useParams();
  const { tableData } = useProductContext();

  const product = tableData[parseInt(id)];

  return (
    <div>
      {product ? (
        <div>
          <h2>Product Detail</h2>
          <p>Name: {product.productName}</p>
          <p>Category: {product.productCategory}</p>
          <p>Freshness: {product.productFreshness}</p>
          <p>Description: {product.productDesc}</p>
          <p>Price: {product.productPrice}</p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}

export default ProductDetail;
