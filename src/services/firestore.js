/*
import {
  getDocs,
  getFirestore,
  collection,
  getDoc,
  doc,
} from "firebase/firestore";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const db = getFirestore(app);

export async function getAllProducts() {
  const productsCollectionRef = collection(db, "productos");

  const docSnapshot = await getDocs(productsCollectionRef);

  const dataProducts = docSnapshot.docs.map((productos) => {
    const city = {
      ...productos.data(),
      id: productos.id,
    };
    return city;
  });

  return dataProducts;
}

export async function getProduct(id) {
  const productsCollectionRef = collection(db, "productos");
  console.log("testeo db" + db)
    const docRef = doc(productsCollectionRef, id);

  const docSnapshot = await getDoc(docRef);
    

  return docSnapshot.data();


  
}

export default db;
*/