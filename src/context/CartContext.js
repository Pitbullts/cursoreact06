import { createContext, useState} from 'react';
import {productos } from '../components/data/data';
export const CartContext = createContext({})

const {Provider} = CartContext;


export const CartProvider = ({ defaultValue = [], children}) => {
    const [cart, setCart] = useState(defaultValue);

    const clearCart = () => {
        setCart([]);
    }

    const isInCart = (id ) => {
        return cart.find((productos) => productos.id === id)
    }
    const addToCart = (item, quantity, nombre, precio) => {
        console.log(item)
        if(isInCart(productos.id)) {
            const newCart = [...cart]
                for( const productos of newCart) {
                        if(productos.id === productos.id) {
                            productos.caja = productos.caja + quantity;
                        }
                }
                setCart(newCart);
     } else {

          setCart(
            [
                    ...cart,
                    {
                        item: item,
                        quantity: quantity,
                        precio: precio,
                        nombre: nombre,
                       
                       
                    }
            ]
        )
    }
    }

    const context = {
      cart ,
         clearCart,
         setCart,
         addToCart
    }


return (
    <Provider value={context}>
        {children}
        </Provider>
)}