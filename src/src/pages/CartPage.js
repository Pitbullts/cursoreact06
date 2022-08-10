import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import '../components/css/body/cartPage.css'


function CartPage() {
  const { cart, clearCart, removeItem, getTotal } = useContext(CartContext);

  if (cart.length === 0) {
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
        <>

      <div>
        <h1 className="center"> Pagina de Carrito</h1>
        <div className="center">
          {cart.map((cartItem) => (
            <div key={cartItem.item} className="card  card-cart">
              <div className="card-body cart-body">
                <p className="card-title">ID:{cartItem.id}</p>
                <p className="card-title">Nombre:{cartItem.nombre}</p>

                <p className="card-text">Precio: ${cartItem.precio}</p>
                <p className="card-text" >Cantidad: {cartItem.quantity}</p>
                <button onClick={() => removeItem(cartItem.id)} className="btn btn-danger center"> Eliminar </button>
              </div>
            </div>
          ))}

          <h3 className="button-vaciar">Total: ${getTotal()}</h3>
          <button onClick={clearCart} className="button-vaciar btn btn-primary">Vaciar Carrito</button>
        </div>
      </div>
      </>
   
    );
  }
  
}
export default CartPage;
