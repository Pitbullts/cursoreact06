import React, { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";

import { useParams } from "react-router-dom";
import {
  getFirestore,
  getDoc,
  doc,
  collection
} from "firebase/firestore";


export const ItemDetailContainer = () => {
  const [item, setItem] = useState();
 

  const { id } = useParams();
  const [loading, setLoading] = useState()

// No logro hacerlo funcionar con el parametro de ID, si bien me lleva al route correcto
// no puedo cargarlo linea 28.

  useEffect( () =>{
    setLoading(true);
    const db = getFirestore();
    
    const collectionProductos = collection(db, "productos")
    const refeDelDoc = doc(collectionProductos, "0FTBCMA9lfnngNrPk3Oq")
    const consulta = getDoc(refeDelDoc)

    consulta
      .then(resultado=>{
        console.log(resultado.id)
        console.log(resultado.data())
        const producto = resultado.data()
        //console.log(producto)
        setItem(producto)
        setLoading(false)
      })
      .catch((error)=>{
        console.log(error)
      })

    .finally(()=> setLoading(false)) 
    
    }, [id] );

  return (
    <>
    <section>
      { loading ? <h1> Cargando ....</h1>  :  <ItemDetail item={item} />}
    </section>
    </>
  )
};
