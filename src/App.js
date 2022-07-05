import React from 'react';



import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/jsx/navbar/navbar';
import MainPage from './components/jsx/body/mainPage'
import { ItemListContainer } from './components/jsx/card/ItemListContainer';
import { ItemDetailContainer } from './components/jsx/Detail/ItemDetailContainer';
import NotFound from './pages/NotFound'
import Home from './pages/home/Home'
export default function App() {
  return (

    <BrowserRouter>

      <NavBar />
      <MainPage />


      <Routes>
      <Route path="/home" element={<Home />} />
        <Route path="/catalogo" element={<ItemListContainer greeting={'Nuestro Catalogo'} />} />
        <Route path="/product/:productoId" element={<ItemDetailContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
