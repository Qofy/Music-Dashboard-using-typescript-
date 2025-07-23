import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, User } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD-J8LAHk3-COlbI36Fxc6h9_vSrLq1D8Y",
  authDomain: "disney-cone.firebaseapp.com",
  projectId: "disney-cone",
  storageBucket: "disney-cone.firebasestorage.app",
  messagingSenderId: "567454527110",
  appId: "1:567454527110:web:9d91b75959cfb699e1eb07",
  measurementId: "G-2EXQJC8BM8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async (): Promise<User | null> => {
  try {
    googleProvider.setCustomParameters({
      prompt: 'select_account'
    });
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error: any) {
    console.error("Error signing in with Google:", error);
    
    // Handle specific error cases
    if (error.code === 'auth/popup-closed-by-user') {
      return null;
    }
    
    if (error.code === 'auth/unauthorized-domain') {
      console.error('Domain not authorized. Please add this domain to Firebase Console.');
      throw new Error('This domain is not authorized for authentication. Please contact support.');
    }
    
    if (error.code === 'auth/operation-not-allowed') {
      throw new Error('Google sign-in is not enabled. Please contact support.');
    }
    
    if (error.code === 'auth/popup-blocked') {
      throw new Error('Popup was blocked by browser. Please allow popups and try again.');
    }
    
    throw error;
  }
};

export const signOutUser = async (): Promise<boolean> => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    console.error("Error signing out:", error);
    return false;
  }
};

export const onAuthStateChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};
