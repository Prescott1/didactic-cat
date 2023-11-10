import "./App.css";
import React, { useState } from "react";
import Product from "./Product";
import RandomCatGif from "./RandomCatGif";

const App = () => {
  const [cart, setCart] = useState([]);
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };
  // I need to replace with actual product details.
  const product = {
    name: "Example Product",
    image: "path/to/image.jpg",
    // Replace with actual image path or URL
    summary: "This is a summary of the product.",
    specifications: ["Specification 1", "Specification 2"],
  };
  return (
    <div>
      {" "}
      <Product product={product} onAddToCart={handleAddToCart} />
      <Product product={product} onAddToCart={handleAddToCart} />{" "}
      <RandomCatGif />
    </div>
  );
};

export default App;
