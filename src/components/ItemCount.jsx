import React from "react";
import { useState } from "react";
import './ItemCount.css';


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

// Habia hecho estos dos, pero despues me vi en el chat el de manu y dije fua, y yo me la re complique.

/*
const removeCount =()=> {

    if (count <= 0)
    {
         setCount(count+1);
    }
    else {
        setCount(count-1)
    }
    return removeCount
}


Eran dos alternativas que ninguna me cerraba, la de arriba, si le volvia a dar restar me daba un 1 y la de abajo me funcionaba pero me tiraba muchos errores en la consola del navegador.

const removeCount =()=> {

    if (count <= 0)
    {
         setCount(count(0));
    }
    else {
        setCount(count-1)
    }
    return removeCount
}



*/