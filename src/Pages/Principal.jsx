import React from 'react';
import Example from '../Components/Example'
import CarouselComponent from '../Components/CarouselComponent';
import ProductList from '../Components/ProductList';
import Footer from '../Components/Footer';





function Principal() {
  return (
    <div>
      <div >
        <Example /> 
        <CarouselComponent/>
        <ProductList/> 
        <Footer/>

        
      </div>
    </div>
  );
}

export default Principal;