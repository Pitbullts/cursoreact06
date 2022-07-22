import React from "react";
import ItemCount from "../card/ItemCount";
import "../../css/card/Item.css";
import {Link} from 'react-router-dom';
import { useContext, useEffect, useState} from 'react';
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


  
  const onAdd = (count) => {

    setPurchaseCompleted(true);
    addToCart(id, count,  nombre, precio);
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
        <ItemCount stock={stock} initial="1" onAdd={onAdd} />

       <Link to="/cartpage"> <button className="btn btn-success">Terminar mi compra</button></Link>
      </section>
    </div>
  );
};
