import React, { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";

import { useParams } from "react-router-dom";
import { getProduct } from "../../../services/firestore";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
 

  const { id } = useParams();
  const [loading, setLoading] = useState(true)


 useEffect(() => {
  setLoading(true)
  getProduct(id)
  .then ( (itemsPromise) => {
    setProduct(itemsPromise);
    
  })
  .catch((errorMsg) => {
    console.error(errorMsg);
  })
  .finally(() => {
    setLoading(false);
  })
 },
 [id]
 );

  return (
    <>
    <section>
      { loading ? <h1> Cargando ....</h1>  :  <ItemDetail item={product} />}
    </section>
    </>
  )
};
