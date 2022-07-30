import React, { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";

import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDoc,
  doc,
} from "firebase/firestore";


export const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
 

  const { id } = useParams();
  const [loading, setLoading] = useState(true)

  useEffect( () =>{

    const db = getFirestore();
    
    const itemRef = doc(db, "productos", (id))
    
    getDoc(itemRef).then ((snapshot) => {
    
    if(snapshot.exists()){
    
    setProduct(snapshot.data())
    
    }
    
    }
    
    
    )
    .finally(()=> setLoading(false)) 
    
    }, [id] );

  return (
    <>
    <section>
      { loading ? <h1> Cargando ....</h1>  :  <ItemDetail item={product} />}
    </section>
    </>
  )
};
