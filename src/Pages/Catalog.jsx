import React from "react";
import Example from "../Components/Example";

import Footer from "../Components/Footer";
import ProductCatalog from "../Components/ProductCatalog";



function Catalog() {
  return (
    <div>
      <div>
        <Example />
        <ProductCatalog />
        <Footer />
      </div>
    </div>
  );
}

export default Catalog;
