import React from "react";
import ItemCount from './ItemCount';
import ItemList from "./ItemList";

function ItemListContainer({widget}) {

    return (
        <div>
           <h3 className="center"> 
            {widget}
           </h3>
           <ItemCount stock="15" initial = "0"/>
           <ItemList />
        </div>
    )
}

export default ItemListContainer;
