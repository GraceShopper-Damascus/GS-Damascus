import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllProducts } from "./productsSlice";
import Product from "./ProductCard";

const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.allProducts);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  console.log("products test", products);

  return (
    <>
      <h1>List of Products:</h1>
      <div>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default AllProducts;
