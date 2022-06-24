// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {collection, deleteDoc, doc, getDoc, getDocs, getFirestore, setDoc,} from "firebase/firestore/lite";

import {Vegetable, VegetableId, VegetableRepository,} from "../../domain/model/Vegetable";
import {getAuth, signInAnonymously} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaBgp4n2LDKOFmxFPNeFV8Pzwe2K1JmaY",
  authDomain: "permaproject-be948.firebaseapp.com",
  projectId: "permaproject-be948",
  storageBucket: "permaproject-be948.appspot.com",
  messagingSenderId: "261814535157",
  appId: "1:261814535157:web:10503d2bc0229d744cd6bc",
};

let path = "vegetable";

export class FirebaseRepository implements VegetableRepository {
  db;

  constructor() {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    signInAnonymously(auth)
      .then(() => {
        console.log("firebase signed in");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });

    this.db = getFirestore(app);
  }

  async add(vegetable: Vegetable): Promise<void> {
    await setDoc(doc(this.db, path, vegetable.id.id), vegetable);
  }

  async get(vegetableId: VegetableId): Promise<Vegetable> {
    const docRef = doc(this.db, path, vegetableId.id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      throw new Error(`Vegetable doesn't exist ${vegetableId.id}`);
    }
    return docSnap.data() as Vegetable;
  }

  async list(): Promise<Vegetable[]> {
    const vegetableCol = collection(this.db, path);
    const vegetablesSnapshot = await getDocs(vegetableCol);
    const vegetablesList = vegetablesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(vegetablesList);
    return vegetablesList as any;
  }

  async remove(vegetableId: VegetableId): Promise<void> {
    await deleteDoc(doc(this.db, path, vegetableId.id));
  }
}
