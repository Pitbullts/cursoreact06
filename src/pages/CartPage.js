import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartPage() {
  const { cart, clearCart, } = useContext(CartContext);
  
  if (cart.lenght === 0) {
    return (
      <div className="center">
      <h2> El Carrito esta vacio, ve y compra algo</h2>
      <Link to="/catalogo">
        <button> Catalogo </button>
      </Link>
    </div>
    );
  } else {
    return (
      <div>
      <h1 className="center"> Pagina de Carrito</h1>
      <div className="center">
        {cart.map((cartItem) => cartItem?.nombre (
          <div key={cartItem.item}>
            <div>
              <p>ID:{cartItem.item}</p>
              <p>Nombre:{cartItem.nombre}</p>
              <p>Precio: ${cartItem.precio}</p>
              <p>Cantidad: {cartItem.quantity}</p>
              
            </div>
          </div>
          
        )) }
  <button onClick={clearCart}>Vaciar Carrito</button>
      
      </div>
    </div>
      
    );
  }
}
export default CartPage;
