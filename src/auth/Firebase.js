import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBA4YNiGRYDQmTN5aTKCv6b8NGv-J6I-bI",
  authDomain: "movie-app-a0f09.firebaseapp.com",
  projectId: "movie-app-a0f09",
  storageBucket: "movie-app-a0f09.appspot.com",
  messagingSenderId: "951076133610",
  appId: "1:951076133610:web:b13d638860502266c6d593",
  measurementId: "G-CT5ZHWD7J6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export const createUser = async (email, password, displayName, navigate) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    navigate("/");
  } catch (error) {
    alert(error.message);
  }
};

export const signIn = async (email, password) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
  } catch (error) {
    alert(error.message);
  }
};

export const logOut = async () => {
  signOut(auth);
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setCurrentUser(currentUser);
    } else {
      setCurrentUser(false);
    }
  });
};
