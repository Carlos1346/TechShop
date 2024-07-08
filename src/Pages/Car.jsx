import React from "react";
import Example from "../Components/Example";

import Footer from "../Components/Footer";

import ShoppingCart from "../Components/ShopingCart";



function Car() {
  return (
    <div>
      <div>
        <Example />
        <ShoppingCart/>
        <Footer />
      </div>
    </div>
  );
}

export default Car;
