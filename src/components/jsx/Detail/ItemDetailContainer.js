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

// No logro hacerlo funcionar con el parametro de ID, si bien me lleva al route correcto, LA RTX 3070 esta con la ID autoGenerada, la 3060 con una ID como string en firebase y la RTX 2060 la ID como un number
// no puedo cargarlo linea 31.
// Basicamente si le paso a la linea 31, un parametro como "id" o id, el contenido que obtengo queda como undefined, sin embargo la ruta esta bien, en cambio, le indico una id exacta esta es la de la rtx 3060 
// RTX : 3060 "0FTBCMA9lfnngNrPk3Oq" Funciona correctamente., creo que no paso correctamente el useParams al parametro de id linea 31


  useEffect( () =>{
    setLoading(true);
    const db = getFirestore();
    
    const collectionProductos = collection(db, "productos")
    const refeDelDoc = doc(collectionProductos, "0FTBCMA9lfnngNrPk3Oq")

console.log(refeDelDoc)
    getDoc(refeDelDoc)
      .then(resultado=>{
        console.log(resultado.id)
        console.log(resultado.data())
        const producto = resultado.data([]);
        console.log("this is the product: " + producto)
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
