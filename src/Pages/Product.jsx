import React from "react";
import Example from "../Components/Example";

import Footer from "../Components/Footer";


import ProductDetail from "../Components/ProductDetail";



function Product() {
  return (
    <div>
      <div>
        <Example />
        <ProductDetail></ProductDetail>
        <Footer />
      </div>
    </div>
  );
}

export default Product;
