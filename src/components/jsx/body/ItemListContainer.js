import React from "react";
import ItemList from "../card/ItemList";

function ItemListContainer({widget}) {

    return (
        <div>
           <h3 className="center"> 
            {widget}
           </h3>
           <ItemList />
        </div>
    )
}

export default ItemListContainer;
