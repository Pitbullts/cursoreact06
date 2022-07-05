// import { UseParams } from 'react-router-dom';

import ItemCount from "../card/ItemCount";
import { getProducts } from "../card/Mock";
import NavBar from "../navbar/navbar";


export const ItemDetail = ({
    id,
    name,
    category,
    image,
    description,
    price,
    discount,
  }) => {


    return (
        <div>
            <NavBar />
        <div>
            
            <h1>Nombre del producto:</h1>
            <p>ID del producto: </p>
            <p>Detalle del producto:</p>
            <p>Precio:</p>
            <ItemCount stock={getProducts.stock} initial = "0" />
        </div>
        </div>
    )


}

