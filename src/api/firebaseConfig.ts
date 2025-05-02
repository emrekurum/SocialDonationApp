// src/api/firebaseConfig.ts
export const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,  // .env dosyasından alınacak
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,  // .env dosyasından alınacak
  projectId: process.env.FIREBASE_PROJECT_ID,  // .env dosyasından alınacak
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,  // .env dosyasından alınacak
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,  // .env dosyasından alınacak
  appId: process.env.FIREBASE_APP_ID,  // .env dosyasından alınacak
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,  // .env dosyasından alınacak
};
