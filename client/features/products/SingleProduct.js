import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getSingleProduct } from "./productsSlice";
import SingleProductCard from "./SingleProductCard";

const SingleProduct = ()=> {
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.singleProduct)
  const {id} = useParams()
  useEffect(()=>{
    dispatch(getSingleProduct(id))
  }, [])

    return(
        <div className="single-product">
            <SingleProductCard product={product} />
        </div>
    );
};

export default SingleProduct;
