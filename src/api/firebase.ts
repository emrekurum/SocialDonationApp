import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from './firebaseConfig';

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Auth ve Firestore referanslarını al
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
