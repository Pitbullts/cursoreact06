import React, { useEffect } from "react";
import ItemCount from "../card/ItemCount";
import "../../css/card/Item.css";
import {Link} from 'react-router-dom';
import { useContext, useState} from 'react';
import {CartContext} from '../../../context/CartContext'

export const ItemDetail = ({
  item,
  id,
  stock
}) => {

const [loading, setLoading] = useState();
const { addToCart } = useContext(CartContext);

const [quantity, setQuantity] = useState(0);

  
  const onAdd = (quantity) => {
    setQuantity(quantity)

    const productToAdd = {
      item,

      stock
    
    }
    addToCart(productToAdd, quantity);
  }

useEffect(()=> {
  setLoading(true);
  setTimeout(() => {
    setLoading(false)
  }, 5000);
})



  if(loading){
    return (
      <div className="text-center border">
      <img src={item.imagenID} alt={`${id}-${item.imagenALT}`} />
      <section>
        <h1>Producto: {item.nombre}</h1>
        <p>ID: {item.id}</p>
        <p>Descripcion: {item.descripcion}</p>
        <p>Categoria: {item.categoria}</p>
        <h2>Precio: ${item.precio}</h2>

        
          {quantity ? (
            <div>
             <Link to="/cartpage" className="btn btn-success"> Terminar mi compra</Link>
             <Link to="/catalogo" className="btn btn-danger"> Seguir comprando </Link>
             </div>
          ) : (
            <ItemCount stock={item.stock} initial="1" onAdd={onAdd} />
          ) 
}
      </section>
    </div>
    )
  }
  else{
 
  return ( 
    <h1 className="center">CARGANDO...</h1>
    
  );
};
};