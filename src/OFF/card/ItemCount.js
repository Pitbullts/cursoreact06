import React from "react";
import { useState } from "react";
import "../../css/card/AddCarrito.css";

function AddCarrito({ initial, stock }) {
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
          <button onClick={restartCount} className="btn btn-success">
            {" "}
            Agregar al Carrito (No funcional momentaneamente){" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddCarrito;
