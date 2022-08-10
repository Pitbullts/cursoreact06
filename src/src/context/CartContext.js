import { createContext, useState, useEffect } from "react";
import { getDocs, getFirestore, collection} from 'firebase/firestore';

import { productos } from "../components/data/data";
export const CartContext = createContext({});


const { Provider } = CartContext;

export const CartProvider = ({ defaultValue = [], children}) => {

    const [productosFetch, setProductosFetch] = useState();

    useEffect(() => {
      const db = getFirestore();
    
      const productosinfo = collection(db, "productos")
    
      getDocs(productosinfo).then((informacion) => {
    
            setProductosFetch(informacion.docs.map((doc) => ({ id: doc.id, ...doc.data()}) ))
    
      })
    }, [])


    const [cart, setCart] = useState(defaultValue);

    const clearCart = () => {
        setCart([]);
    }
    const removeItem = (id) =>  {
        const deleteItem = cart.filter(elem => elem.id !== id);
        setCart(deleteItem)
    }



    const isInCart = (id ) => {
        return cart.find((productos) => productos.id === id)
    }
        const addToCart = (item, quantity) => {
                const newProd = {
                    ...item,
                    quantity
                }
                if (isInCart(newProd.id)){
                    cart.map(elem => {
                        if(elem.id === newProd.id) {
                            elem.quantity += newProd.quantity
                        }
                        return elem
                    })
                } else {
                    setCart([...cart, newProd])
                }
 
        }

        const getTotal = () => {
            let total = 0
                cart.forEach((elem) => {
                    total = total + (elem.quantity * elem.precio)
                })
                    return total
        }

      const getQuantity = () => {
        let cantidad = 0
            cart.forEach((elem) => cantidad = cantidad + elem.quantity)
            return cantidad
      }
  const context = {
    cart,
    clearCart,
    setCart,
    addToCart,
    removeItem,
    getTotal,
    getQuantity,
    productosFetch
  };

  return <Provider value={context}>{children}</Provider>;
};
