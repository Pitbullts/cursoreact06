import React, { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import { productos } from '../../data/data';


import { useParams } from 'react-router-dom';

export const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);


  const [loading, setLoading] = useState(true);


  const { categoriaID } = useParams();

  useEffect(() => {

    setLoading(true);
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
 
        const myPruducts = productos

        resolve(myPruducts);
      }, 1000);
    });

    getProducts
      .then((res) => {
        setItems(res);
      })
      .finally(() => setLoading(false));
  }, [categoriaID]);


  return loading ? (
    <h2>CARGANDO...</h2>
  ) : (
    <>
      <h3 style={{ textAlign: 'center' }}>{greeting}</h3>
      <ItemList items={items} />
    </>
  );
};