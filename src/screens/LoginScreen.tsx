// src/screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
// auth nesnesini güncellenmiş firebase.ts dosyamızdan alıyoruz.
import { auth } from '../api/firebase'; // Bu import firebase.ts'deki export ile eşleşmeli

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Hata', 'Lütfen email ve şifre alanlarını doldurun.');
      return;
    }
    setLoading(true);
    try {
      // @react-native-firebase/auth'dan gelen auth nesnesinin signInWithEmailAndPassword metodunu kullanıyoruz.
      await auth.signInWithEmailAndPassword(email, password);
      Alert.alert('Başarılı', 'Giriş yapıldı.');
      // Başarılı giriş sonrası ana ekrana veya ilgili ekrana yönlendirme
      navigation.navigate('Home'); // 'Home' ekranınızın adı neyse onu kullanın
    } catch (error: any) {
      let errorMessage = 'Giriş yapılamadı. Lütfen bilgilerinizi kontrol edin.';
      if (error.code === 'auth/user-not-found') {
        errorMessage = 'Bu email ile kayıtlı kullanıcı bulunamadı.';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Yanlış şifre girdiniz.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Geçersiz email adresi formatı.';
      } else if (error.code === 'auth/invalid-credential') {
        errorMessage = 'Geçersiz kullanıcı bilgileri. Lütfen email ve şifrenizi kontrol edin.';
      }
      else {
        console.error("Giriş Hatası Detayı:", error);
        // errorMessage = error.message; // Firebase'den gelen genel mesajı da kullanabilirsiniz
      }
      Alert.alert('Giriş Başarısız', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giriş Yap</Text>
      <TextInput
        style={styles.input}
        placeholder="Email Adresiniz"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#888"
      />
      <TextInput
        style={styles.input}
        placeholder="Şifreniz"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#888"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Giriş Yapılıyor...' : 'Giriş Yap'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')} disabled={loading}>
        <Text style={styles.link}>Hesabın yok mu? Kayıt ol</Text>
      </TouchableOpacity>
    </View>
  );
};

// Stiller RegisterScreen ile benzer olabilir, projenize göre uyarlayın
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 12,
    color: '#007bff',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default LoginScreen;
