import React, { useState, useEffect } from "react";
import { ItemList } from "./ItemList";


import { collection, getDocs, getFirestore } from "firebase/firestore";

export const ItemListContainer = ({ greeting }) => {

  
  const [items, setItems] = useState({});
  const [isloading, setIsLoading] = useState(true);

 useEffect(() => {

    const db = getFirestore();
    const productosRef = collection(db, "productos");
      getDocs(productosRef).then((snapshot) =>{
        setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data() })))
      })
      .finally(() => setIsLoading(false))
 }, 
 []
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