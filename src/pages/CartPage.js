import {useContext, useEffect} from 'react';
import { CartContext } from './context/CartContext';


function CartPage() {

  const context = useContext(CartContext);


useEffect(() => {
  console.log(context);
}, []);

  
  return (
    <div>
            <h1 className="center"> Pagina de Carrito</h1>
            <div className='center'>
                {context.cart.map(cartItem => (
                  <div key= {cartItem.item}> 
                    <div>
                      <p>ID:{cartItem.item}</p>
                      <p>Precio: ${cartItem.precio}</p>
                      <p>Cantidad: {cartItem.quantity}</p>
                           (
                )
                  
                    </div>
                  
                  </div>
                ))}
 

            </div>
    </div>
  );
}
export default CartPage;
