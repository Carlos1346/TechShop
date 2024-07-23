import React from "react";
import { Routes, Route } from "react-router-dom";

// Vistas

// Componentes
//import Example from "../Components/Example";
//import LoginForm from "../Components/LoginForm";
//import RegisterForm from "../Components/RegisterForm";
//import Reviews from "../Components/Reviews";
//import ProductList from "../Components/ProductList";
import CarouselComponent from "../Components/CarouselComponent";
//import ShoppingCart from "../Components/ShopingCart";
//import ProductCatalog from "../Components/ProductList";
//import Status from "../Components/Status";
import Principal from "../Pages/Principal";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Catalog from "../Pages/Catalog";
import Car from "../Pages/Car";
import ListWish from "../Pages/ListWish";
import Shoping from "../Pages/Shoping";
import ProfileView from "../Pages/ProfileView";
import QuestionaryView from "../Pages/QuestionaryView";
import Contact from "../Pages/Contact";

function Main() {
  return (
    <>
      <div id="Background">
        <Routes>
          {/* Ruta para la vista inicial "Start" */}
          <Route path="/" element={<Principal />}>
            <Route path="Hola" element={<CarouselComponent />} />
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="/car" element={<Car />}></Route>
          <Route path="/listwish" element={<ListWish />}></Route>
          <Route path="/status" element={<Shoping />}></Route>
          <Route path="/profile" element={<ProfileView />}></Route>
          <Route path="/questionary" element={<QuestionaryView />}></Route>
          <Route path="/contact" element={<Contact />}></Route>

        </Routes>
      </div>
    </>
  );
}

export default Main;
