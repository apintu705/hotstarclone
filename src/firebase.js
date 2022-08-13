import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore} from 'firebase/firestore/lite'
import { GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBgpdcV2Ao_lYCN4w9qdR8Dy6zrhpV5YlE",
    authDomain: "hotstarclone-cc905.firebaseapp.com",
    projectId: "hotstarclone-cc905",
    storageBucket: "hotstarclone-cc905.appspot.com",
    messagingSenderId: "143557788009",
    appId: "1:143557788009:web:2095648af35d7c8bfcfdf8",
    measurementId: "G-V76SHD3YN7"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };
export default db;