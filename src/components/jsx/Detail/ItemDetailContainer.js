import React, { useState, useEffect } from 'react';
import { ItemDetail } from './ItemDetail';
import { productos } from '../../data/data';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { productoId } = useParams();

  console.log(productoId);

  useEffect(() => {
    setLoading(true);
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        const myData = productos.find((producto) => producto.id === productoId);

        resolve(myData);
      }, 1000);
    });

    getItems
      .then((res) => {
        setProduct(res);
      })
      .finally(() => setLoading(false));
  }, [productoId]);

  return loading ? <h2>CARGANDO...</h2> : <ItemDetail {...product} />;
};
