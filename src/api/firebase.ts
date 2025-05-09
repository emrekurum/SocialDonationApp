// src/api/firebase.ts

// @react-native-firebase/auth modülünden auth servisini import ediyoruz.
import authImport from '@react-native-firebase/auth';

// @react-native-firebase/firestore modülünden firestore servisini import ediyoruz.
// Eğer Firestore kullanmıyorsanız bu satırı silebilirsiniz.
import firestoreImport from '@react-native-firebase/firestore';

// @react-native-firebase genellikle projenizdeki google-services.json (Android)
// veya GoogleService-Info.plist (iOS) dosyalarından yapılandırmayı otomatik alır.
// Bu nedenle, web SDK'sındaki gibi manuel initializeApp(firebaseConfig) çağırmanıza
// genellikle gerek yoktur. Firebase uygulaması native tarafta zaten başlatılmış olur.

// Firebase Authentication servisini alıyoruz.
const auth = authImport();

// Firebase Firestore servisini alıyoruz.
// Eğer Firestore kullanmıyorsanız bu satırı ve aşağıdaki export'taki db'yi silebilirsiniz.
const db = firestoreImport();

// auth ve db nesnelerini dışa aktarıyoruz.
export { auth, db };
