import { app } from "./firebase.js";
import {getFirestore,collection,addDoc} from "firebase/firestore"


const db = getFirestore(app)

try {
    const docRef = await addDoc(collection(db, "images"), {
        name:"Diamond",
    img:"./4k wallpaper/awesome-jewelry-wallpaper_072524644_205.jpg",
    quote:"You only live once, but if you do it right, once is enough."
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }