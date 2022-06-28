import React, { useState, useEffect } from "react";
import { getProduct } from "./Item";
import '../../css/card/Card.css';
import AddCarrito from './AddCarrito';

function Card() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
      getProduct
        .then((resp) => setProductos(resp))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, []);
  
  
    return (
        <div>
        { loading ? <h3> Los productos estan siendo cargados, por favor, aguarde...</h3>
            :
        productos.map(prod => <div key={prod.id}>
                                    <div className="card m1">
                                        <div className="card-header">
                                            {`${prod.nombre} - ID:    ${prod.id}`}
                                        </div>
                                            <div className="card-body">
                                                <img src={prod.imagenID} alt={prod.imagenALT}></img>
                                                <p>Precio: ${prod.precio} USD</p>
                                                <AddCarrito stock={prod.stock} initial = "0" />
                                            </div>
                                </div>  
                                </div> 
                                    )}
    </div>
    );
}

export default Card;