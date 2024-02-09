import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {

  apiKey: "AIzaSyDjMTaP2A2oBvcqkx2AndaSi3ZeIDjVYZM",

  authDomain: "recap-project-90ffb.firebaseapp.com",

  projectId: "recap-project-90ffb",

  storageBucket: "recap-project-90ffb.appspot.com",

  messagingSenderId: "372503427811",

  appId: "1:372503427811:web:cbe55c37c4ee9a785ca3d6"

};



const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
