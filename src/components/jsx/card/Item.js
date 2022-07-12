import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/card/Item.css'

export const Item = ({ id, nombre, categoria, imagenID, precio,imagenALT, stock }) => {
  return (
    <>
    <div className='card text-center cards-format'>
    <Link to={`/product/${id}`}>
      <div className={` ${categoria}-categoria`} >
      <span>
          <img src={imagenID} alt={imagenALT} className="card-img-tiles small-img"/>
        </span>
        <p className='card-title text-muted'>{nombre}</p>
        <p className='text-muted'>{categoria}</p>
        <p className='text-muted'>${precio}</p>
        
      </div>
    </Link>
    </div>
    </>
  );
};
