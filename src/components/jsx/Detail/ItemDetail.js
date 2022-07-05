import React from 'react';
import ItemCount from '../card/ItemCount';
import '../../css/card/Item.css'
export const ItemDetail = ({
  id, nombre, categoria,imagenID, precio, descripcion,imagenALT,stock
}) => {
  return (
 
    <div className='text-center border'>
      <img src={imagenID} alt={`${id}-${imagenALT}`}  />
      <section c>
        <h1>Producto: {nombre}</h1>
        <p>ID: {id}</p>
        <p>Descripcion: {descripcion}</p>
        <p>Categoria: {categoria}</p>
        <h2>Precio: ${precio}</h2>
        <ItemCount stock={stock} initial="0"/>
      </section>
    </div>

  );
};
