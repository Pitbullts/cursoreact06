import React from "react";
import { useState } from "react";


function ItemCount({initial, stock}) {

    const [count, setCount] = useState(0)



const addCount =()=> {
    if (count < stock) {
        setCount(count+1)
    }
    

}

const removeCount =()=> {

        if (count > initial )
        {
            setCount(count -1)
        }
}
const restartCount =()=> {
    setCount((0))
}

return (
    <div id="contador">
        <h1>Contador</h1>

    <div>
    <button onClick={addCount}>Sumar +</button>
            {count}
        <button onClick={removeCount}>Restar -</button>

    </div>
        <button onClick = {restartCount}> Agregar al Carrito (No funcional momentaneamente) </button>
    </div>
)


}

export default ItemCount; 
