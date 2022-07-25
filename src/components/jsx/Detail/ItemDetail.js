import React from "react";
import ItemCount from "../card/ItemCount";
import "../../css/card/Item.css";
import {Link} from 'react-router-dom';
import { useContext, useState} from 'react';
import {CartContext} from '../../../context/CartContext'

export const ItemDetail = ({
  id,
  nombre,
  categoria,
  imagenID,
  precio,
  descripcion,
  imagenALT,
  stock,
  caja,
}) => {

const { addToCart } = useContext(CartContext);
const [purchasedCompleted, setPurchaseCompleted] = useState(false);
const [quantity, setQuantity] = useState(0);

  
  const onAdd = (quantity) => {
    setQuantity(quantity)
    setPurchaseCompleted(true);
    const productToAdd = {
      id,
      nombre,
      categoria,
      imagenID,
      precio,
      descripcion,
      imagenALT,
      stock
    
    }
    addToCart(productToAdd, quantity);
  }


  //   <button onClick={() => console.log(nombre + space + id + space + precio + space + "test")} className="btn btn-success">
  return (
    <div className="text-center border">
      <img src={imagenID} alt={`${id}-${imagenALT}`} />
      <section c>
        <h1>Producto: {nombre}</h1>
        <p>ID: {id}</p>
        <p>Descripcion: {descripcion}</p>
        <p>Categoria: {categoria}</p>
        <h2>Precio: ${precio}</h2>
        {   /* Nota aparte, Tengo algun bardo con el onadd por que no puedo añadir mas de 1 solo al carrito */ }
        
          {quantity ? (
            <div>
             <Link to="/cartpage" className="btn btn-success"> Terminar mi compra</Link>
             <Link to="/catalogo" className="btn btn-danger"> Seguir comprando </Link>
             </div>
          ) : (
            <ItemCount stock={stock} initial="1" onAdd={onAdd} />
          ) 
}
      </section>
    </div>
  );
};