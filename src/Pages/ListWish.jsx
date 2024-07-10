import React from "react";
import Example from "../Components/Example";

import Footer from "../Components/Footer";

import WishList from "../Components/WishList";



function ListWish() {
  return (
    <div>
      <div>
        <Example />
        <WishList/>
        <Footer />
      </div>
    </div>
  );
}

export default ListWish;