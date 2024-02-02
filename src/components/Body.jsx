import React, { useState } from "react";
import ProductCard from "./ProductCard";

const Body = ({productList}) => {

  return (
    <>
      {!productList ? <h1>No Such products</h1> :
      (productList.map((obj,key) => (
        <ProductCard
          name={obj.name}
          description={obj.description}
          price={obj.price}
          key={key}
        />
      )))
      } 
    </>
  );
};

export default Body;
