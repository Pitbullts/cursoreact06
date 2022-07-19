import { createContext, useState} from 'react';
import imgs from "../../assets/img/items/itemsImg";
export const CartContext = createContext({})

const {Provider} = CartContext;

const productos = [
    {
        id: "0",
        nombre: "RTX 3090",
        imagenID: imgs["img-3090"],
        imagenALT: "Imagen RTX 3090",
        categoria: "Serie-3000",
        descripcion: "Descripcion del objeto",
        precio: 4500,
        stock: 10,
        quantity: 0
      },
      {
        id: "1",
        nombre: "RTX 3080",
        imagenID: imgs["img-3080"],
        imagenALT: "Imagen RTX 3080",
        categoria: "Serie-3000",
        descripcion: "Descripcion del objeto",
        precio: 4000,
        stock: 5,
        quantity: 0
      },
      {
        id: "2",
        nombre: "RTX 3070",
        imagenID: imgs["img-3070"],
        imagenALT: "Imagen RTX 3070",
        categoria: "Serie-3000",
        descripcion: "Descripcion del objeto",
        precio: 3500,
        stock: 7,
        quantity: 0
      },
      {
        id: "3",
        nombre: "RTX 3060",
        imagenID: imgs["img-3060"],
        imagenALT: "Imagen RTX 3060",
        categoria: "Serie-3000",
        descripcion: "Descripcion del objeto",
        precio: 3000,
        stock: 8,
        quantity: 0
      },
      {
        id: "4",
        nombre: "RTX 3050ti",
        imagenID: imgs["img-3060"],
        imagenALT: "Imagen RTX 3060",
        categoria: "Serie-3000",
        descripcion: "Descripcion del objeto",
        precio: 2750,
        stock: 5,
        quantity: 0
      },
      {
        id: "5",
        nombre: "RTX 2090",
        imagenID: imgs["img-3060"],
        imagenALT: "Imagen RTX 3060",
        categoria: "Serie-2000",
        descripcion: "Descripcion del objeto",
        precio: 2500,
        stock: 3,
        quantity: 0
      },
      {
        id: "6",
        nombre: "RTX 2080ti",
        imagenID: imgs["img-3060"],
        imagenALT: "Imagen RTX 3060",
        categoria: "Serie-2000",
        descripcion: "Descripcion del objeto",
        precio: 2500,
        stock: 2,
        quantity: 0
      },
      {
        id: "7",
        nombre: "RTX 2080",
        imagenID: imgs["img-3060"],
        imagenALT: "Imagen RTX 3060",
        categoria: "Serie-2000",
        descripcion: "Descripcion del objeto",
        precio: 2500,
        stock: 4,
        quantity: 0
      },
      {
        id: "8",
        nombre: "RTX 2070",
        imagenID: imgs["img-3060"],
        imagenALT: "Imagen RTX 3060",
        categoria: "Serie-2000",
        descripcion: "Descripcion del objeto",
        precio: 2500,
        stock: 7,
        quantity: 0
      },
      {
        id: "9",
        nombre: "RTX 2060",
        imagenID: imgs["img-3060"],
        imagenALT: "Imagen RTX 3060",
        categoria: "Serie-2000",
        descripcion: "Descripcion del objeto",
        precio: 2500,
        stock: 12,
        quantity: 0
      },
      {
        id: "10",
        nombre: "GTX 1080",
        imagenID: imgs["img-3060"],
        imagenALT: "Imagen RTX 3060",
        categoria: "Serie-1000",
        descripcion: "Descripcion del objeto",
        precio: 2000,
        stock: 6,
        quantity: 0
      },
      {
        id: "11",
        nombre: "GTX 1070",
        imagenID: imgs["img-3060"],
        imagenALT: "Imagen RTX 3060",
        categoria: "Serie-1000",
        descripcion: "Descripcion del objeto",
        precio: 2500,
        stock: 18,
        quantity: 0
      },
];
export const CartProvider = ({ defaultValue = [], children}) => {
    const [cart, setCart] = useState(defaultValue);



    const isInCart = (id ) => {
        return cart.find((productos) => productos.id === id)
    }
    const addToCart = (producto, quantity) => {
      console.log('este es el :' + producto)
        if(isInCart(productos.id)) {
            const newCart = [...cart]
                for( const productos of newCart) {
                        if(productos.id === productos.id) {
                            productos.quantity = productos.quantity + quantity;
                        }
                }
                setCart(newCart);
     } else {

          setCart(
            [
                    ...cart,
                    {
                        IdProd: producto,
                        quantity: quantity,
                    }
            ]
        )
    }
    }

    const context = {
      cart ,

         setCart,
         addToCart
    }


return (
    <Provider value={context}>
        {children}
        </Provider>
)}