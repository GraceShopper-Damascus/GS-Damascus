import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllProducts } from "./productsSlice";
// import ProductCard from "./AllProductsCard";
import AllProductsCard from "./AllProductsCard";
// import { addToCart } from "../cart/cartSlice";

const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.allProducts);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  console.log("products test", products);

  return (
    <>
      <h1 className="products-container-header">List of Products:</h1>
      <div className="products-container">
        {products.map((product) => (
          <AllProductsCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default AllProducts;
