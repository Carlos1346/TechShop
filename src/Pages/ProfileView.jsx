import React from "react";
import Example from "../Components/Example";

import Footer from "../Components/Footer";
//import ProductCatalog from "../Components/ProductCatalog";
import Profile from "../Components/Profile";



function ProfileView() {
  return (
    <div>
      <div>
        <Example />
        <Profile/>
        <Footer />
      </div>
    </div>
  );
}

export default ProfileView;
