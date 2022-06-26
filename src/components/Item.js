import imgs from "../assets/img/items/itemsImg"

const productos = [
  { id: 0, nombre: "RTX 3090", imagenID: imgs["img-3090"], imagenALT:"Imagen RTX 3090", precio: 4500, },
  { id: 1, nombre: "RTX 3080", imagenID: imgs["img-3080"],  imagenALT:"Imagen RTX 3080", precio: 4000},
  { id: 2, nombre: "RTX 3070", imagenID: imgs["img-3070"],  imagenALT:"Imagen RTX 3070", precio: 3500},
  { id: 3, nombre: "RTX 3060", imagenID: imgs["img-3060"],  imagenALT:"Imagen RTX 3060", precio: 3000},

];


//  a f     const TraerProductos = new Promise((resolve))
export const getProduct = new Promise((resolve, reject) => {
  let condicion = true; 
  if (condicion) {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  } else {
    reject("error");
  }
  console.log(productos);
});
