import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCZ1lNtEidUDpVUpqTmWCec_Xu2aO7efds",
    authDomain: "prueba-semana-41e11.firebaseapp.com",
    projectId: "prueba-semana-41e11",
    storageBucket: "prueba-semana-41e11.appspot.com",
    messagingSenderId: "635365657980",
    appId: "1:635365657980:web:885462c635be05b71828f9",
    measurementId: "G-B9SWB982ZN"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };