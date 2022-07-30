import { collection, getDocs, getFirestore, query, where  } from "firebase/firestore";
import { useEffect, useState } from "react";

function Serie1000() {  
    const [productsFiltered, setProductsFiltered] = useState();
useEffect(() => {
    const db = getFirestore();

    const q = query(collection(db, "productos"), where("categoria", "=", "Serie-1000"));
    
    
    getDocs(q).then((snapshot) => {

        setProductsFiltered(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()})))
    })
    console.log(productsFiltered)
})
return (
    <button onClick={productsFiltered}>Serie 1000 BOTON TEST</button>
)
}
export default Serie1000;