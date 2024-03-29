import { createContext, useState } from "react";

export const CartContext = createContext({});


const { Provider } = CartContext;

export const CartProvider = ({ defaultValue = [], children}) => {




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
                if (isInCart(newProd.item.id)){
                    cart.map(elem => {
                        if(elem.id === newProd.item.id) {
                            elem.quantity += newProd.item.quantity
                        }
                        return elem
                    })
                } else {
                    setCart([...cart, newProd])
                }
 
        }

        const getTotal = () => {
            let total = 0
                cart.forEach((item) => {
                    total = total + (item.quantity * item.item.precio)
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
    getQuantity
  };

  return <Provider value={context}>{children}</Provider>;
};
