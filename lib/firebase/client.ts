import firebaseClient from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const FIREBASE_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

if (typeof window !== 'undefined' && !firebaseClient.apps.length) {
  firebaseClient.initializeApp(FIREBASE_CONFIG);
}

export const GOOGLE_AUTH_PROVIDER = new firebaseClient.auth.GoogleAuthProvider();

export default firebaseClient;
