import React, { useState } from "react";
import "../../css/card/ItemCount.css";



function AddCarrito({ initial, stock, onAdd }) {
  const [count, setCount] = useState(0);

  const addCount = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const removeCount = () => {
    if (count > initial) {
      setCount(count - 1);
    }
 
  };
  const restartCount = () => {
    setCount(0);
  };
 
  return (  
    <div>
      <div>
        <div className="contador">
          <button
            type="button"
            className="btn btn-info btn-modif-1"
            onClick={addCount}
            disabled={count === stock ? true : null}
          >
            Sumar +
          </button>

          <p> {count} </p>

          <button
            type="button"
            className="btn btn-info btn-modif-2"
            onClick={removeCount}
          >
            Restar -
          </button>
        </div>
      </div>
      <div className="botones-2">
        <div>
          <button onClick={restartCount} className="btn btn-danger">
            {" "}
            Vaciar cantidad{" "}
          </button>
        </div>

        <div>
          <button onClick={()=> onAdd(count)} className="btn btn-success">

            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCarrito;
