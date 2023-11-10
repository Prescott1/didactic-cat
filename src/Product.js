import React from "react";
const Product = ({ product, onAddToCart }) => {
  return (
    <div>
      {" "}
      <img src={product.image} alt={product.name} /> <h2>{product.name}</h2>{" "}
      <p>{product.summary}</p>{" "}
      <ul>
        {" "}
        {product.specifications.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}{" "}
      </ul>{" "}
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>{" "}
    </div>
  );
};
export default Product;
