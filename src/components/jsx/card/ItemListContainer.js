import React, { useState, useEffect } from "react";
import { ItemList } from "./ItemList";

import { useParams } from "react-router-dom";

import {
  collection,
  getDocs,
  getFirestore,
  query,
  where
} from "firebase/firestore";

export const ItemListContainer = ({ greeting }) => {


  const [filters, setFilters] = useState([]);

  const [loading, setLoading] = useState(true);

  const { categoriaID } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();

    const q = query(
      collection(db, "productos"),
      where("categoria", "=", categoriaID)
    );
    getDocs(q).then((prodFiltrados) => {
      setFilters(
        prodFiltrados.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });
    getDocs.finally(() => setLoading(false))
  }, [categoriaID]);

  return loading ? (
    <h2>CARGANDO...</h2>
  ) : (
    <>
      <h3 style={{ textAlign: "center" }}>{greeting}</h3>
      <ItemList items={filters} />
    </>
  );
};
