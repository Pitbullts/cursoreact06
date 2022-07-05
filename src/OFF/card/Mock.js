
import { productos } from "../../data/data";

export const getProducts = new Promise((resolve, reject) => {
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

