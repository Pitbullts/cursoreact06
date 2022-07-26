import React, { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { getAllProducts } from '../../../services/firestore';

export const ItemListContainer = ({ greeting }) => {
  let { categoriaID } = useParams();
  
  const [items, setItems] = useState([]);
  const [isloading, setIsLoading] = useState(true);

 useEffect(() => {
  getAllProducts().then( data => {
    console.log("item list cont", data)
    setIsLoading(false);
    setItems(data);
  })
  .catch( (errorMsg) => {
    console.log(errorMsg);
  })
 }, 
 [categoriaID]
 );

  return isloading? (
    <h2>CARGANDO...</h2>
  ) : (
    <>
      <h3 style={{ textAlign: "center" }}>{greeting}</h3>
      <ItemList items={items} />
      
    </>
  );
};