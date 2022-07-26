import { initializeApp } from "firebase/app";
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
const firebaseConfig = {
  apiKey: "AIzaSyDt9b2MOKFO37a6xnLlacbcolyZwmhVguI",
  authDomain: "coderhouse-react-eccomerce.firebaseapp.com",
  projectId: "coderhouse-react-eccomerce",
  storageBucket: "coderhouse-react-eccomerce.appspot.com",
  messagingSenderId: "922812942972",
  appId: "1:922812942972:web:9e992166cbaa6affdb57f9",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export function testDB() {
  console.log(db);
}

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
    const docRef = doc(productsCollectionRef, id)

  const docSnapshot = await getDoc(docRef);

  return docSnapshot.data();
}

export default db;
