import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import '../components/css/body/cartPage.css'
import { collection , addDoc , serverTimestamp, getFirestore } from "firebase/firestore"

function CartPage() {
  const { cart, clearCart, removeItem, getTotal } = useContext(CartContext);


  const [idCompra,setIdCompra] = useState("")

  const handleBuy = () => {
  
    const db = getFirestore()

    const collectionOrdenes = collection(db,"orders")

    const orderData = {
      buyer : {
        nombre : "Raulito",
        phone : "555555555",
        email : "test@test.com"
      },
      items : [{id:1,titulo:"ITEM TEST"}],
      date : serverTimestamp(),
      total : 100
    }

    const consulta = addDoc(collectionOrdenes,orderData)

    consulta
      .then(resultado=>{
        setIdCompra(resultado.id)
      })
      .catch(error=>{
        console.log(error)
      })


  }



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
            <div key={cartItem.item.item} className="card  card-cart">
              <div className="card-body cart-body">
                <p className="card-title">ID:{cartItem.item.id}</p>
                <p className="card-title">Nombre:{cartItem.item.nombre}</p>

                <p className="card-text">Precio: ${cartItem.item.precio}</p>
                <p className="card-text" >Cantidad: {cartItem.quantity}</p>
                <button onClick={() => removeItem(cartItem.item.id)} className="btn btn-danger center"> Eliminar </button>
              </div>
            </div>
          ))}

          <h3 className="button-vaciar">Total: ${getTotal()}</h3>
          <button onClick={clearCart} className="button-vaciar btn btn-primary">Vaciar Carrito</button>
          <br></br>
          <span></span>
          {idCompra&&<p>Su compra es : {idCompra}</p>}
          <button className="btn btn-success" onClick={handleBuy}>Finalizar compra</button>
        </div>
      </div>
      </>
   
    );
  }
  
}
export default CartPage;
