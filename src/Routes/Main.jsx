import React from "react";
import { Routes, Route } from "react-router-dom";

// Vistas

// Componentes
import Example from "../Components/Example";

function Main() {
  return (
    <>
      <div id="Background">
        <Routes>
          {/* Ruta para la vista inicial "Start" */}
          <Route path="/" element={<Example />}>
            {/*<Route path="login" element={<LoginForm />} />*/}
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default Main;
