import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { 
    getAuth, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signOut 
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAI6EsiVKaXSr0qV4I893Nw661vZfeKDJ4",
  authDomain: "mdxlogin-4f20b.firebaseapp.com",
  projectId: "mdxlogin-4f20b",
  storageBucket: "mdxlogin-4f20b.firebasestorage.app",
  messagingSenderId: "817544109365",
  appId: "1:817544109365:web:f66443f8a2c0b3423f007c",
  measurementId: "G-LLXRRJQQ69"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

let analytics;
if (typeof window !== 'undefined') {
    isSupported().then((yes) => {
        if (yes)
            analytics = getAnalytics(app);
    });
}

// criar a autenticação com o google
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export async function signInWithGooglePopup() {
   try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
   } catch (error) {
    console.error("Erro ao fazer login com o Google", error);
    throw error;
   }

}

// encerrar o login
export async function logout() {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Erro ao sair", error);
        throw error;
    }
}

export { auth, googleProvider, app, analytics };