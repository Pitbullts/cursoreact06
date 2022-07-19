import { useState, UseFfect, useContext, useEffect} from 'react';
import { CartContext } from './context/CartContext';


function CartPage() {
  const [cartFetch, setCartFetch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const context = useContext(CartContext);


useEffect(() => {
  console.log(context);
}, []);

  
  return (
    <div>
            <h1 className="center"> Pagina de Carrito</h1>
            <div className='center'>
                {context.cart.map(cartItem => (
                  <div key= {cartItem.id}> 
                    <div>
                      <p>{cartItem.id}</p>
                      <p>- ${cartItem.precio}</p>
                      <p>{cartItem.quantity}</p>
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
