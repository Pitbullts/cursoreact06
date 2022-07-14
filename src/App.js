import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/jsx/navbar/navbar";
import MainPage from "./components/jsx/body/mainPage";
import { ItemListContainer } from "./components/jsx/card/ItemListContainer";
import { ItemDetailContainer } from "./components/jsx/Detail/ItemDetailContainer";
import NotFound from "./pages/NotFound";
import Home from "./pages/home/Home";
import CartPage from "./pages/CartPage";
import Contacto from './pages/Contacto';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <MainPage />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/catalogo"
          element={<ItemListContainer greeting={"Nuestro Catalogo"} />}
        />
        <Route path="/cartpage" element={<CartPage />} />
        <Route
          path="/category/:categoriaID"
          element={<ItemListContainer greeting={"Items Filtrados"} />}
        />
        <Route 
        path="/contacto"
        element={<Contacto />}/>

        <Route path="/product/:productoId" element={<ItemDetailContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
