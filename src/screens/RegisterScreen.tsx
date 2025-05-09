// src/screens/RegisterScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
// createUserWithEmailAndPassword fonksiyonunu @react-native-firebase/auth'dan import ediyoruz.
// Ayrıca auth nesnesini güncellenmiş firebase.ts dosyamızdan alıyoruz.
import { auth } from '../api/firebase'; // Bu hala doğru, çünkü firebase.ts auth'u @react-native-firebase/auth'dan alacak

const RegisterScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Yükleme durumu için state

  const handleRegister = async () => {
    if (!email || !password) {
      Alert.alert('Hata', 'Lütfen email ve şifre alanlarını doldurun.');
      return;
    }
    setLoading(true); // Yüklemeyi başlat
    try {
      // @react-native-firebase/auth'dan gelen auth nesnesinin createUserWithEmailAndPassword metodunu kullanıyoruz.
      await auth.createUserWithEmailAndPassword(email, password);
      Alert.alert('Başarılı', 'Kayıt başarıyla oluşturuldu. Lütfen giriş yapın.');
      navigation.navigate('Login'); // Kayıt başarılıysa Login ekranına yönlendir
    } catch (error: any) {
      let errorMessage = 'Bilinmeyen bir hata oluştu.';
      // Firebase hata kodlarına göre kullanıcı dostu mesajlar göstermek daha iyi bir yaklaşımdır.
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'Bu email adresi zaten kullanımda.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Geçersiz email adresi formatı.';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = 'Şifre çok zayıf. Lütfen en az 6 karakter kullanın.';
      } else {
        // Diğer Firebase hataları veya genel ağ hataları için
        console.error("Kayıt Hatası Detayı:", error); // Geliştirme aşamasında konsola detaylı hata basmak faydalıdır
        errorMessage = error.message; // Firebase'den gelen genel mesajı kullan
      }
      Alert.alert('Kayıt Başarısız', errorMessage);
    } finally {
      setLoading(false); // Yüklemeyi bitir
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kayıt Ol</Text>
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
      {/* Buton için TouchableOpacity ve stil ekleyerek daha iyi bir görünüm sağlandı */}
      <TouchableOpacity style={styles.button} onPress={handleRegister} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Kaydediliyor...' : 'Kayıt Ol'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} disabled={loading}>
        <Text style={styles.link}>Zaten hesabın var mı? Giriş yap</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ekranı kaplaması için
    justifyContent: 'center', // İçeriği dikeyde ortala
    padding: 20,
    backgroundColor: '#f5f5f5', // Arka plan rengi
  },
  title: {
    fontSize: 28, // Daha büyük başlık
    fontWeight: 'bold', // Kalın yazı
    marginBottom: 24, // Daha fazla boşluk
    textAlign: 'center', // Ortalanmış başlık
    color: '#333', // Koyu renk başlık
  },
  input: {
    height: 50, // Daha yüksek input alanı
    borderColor: '#ddd', // Daha yumuşak border rengi
    borderWidth: 1,
    marginBottom: 15, // Inputlar arası boşluk
    paddingHorizontal: 15, // İçten yatay boşluk
    borderRadius: 8, // Yuvarlak köşeler
    backgroundColor: '#fff', // Beyaz arka plan
    fontSize: 16, // Input yazı boyutu
  },
  button: {
    backgroundColor: '#007bff', // Mavi buton rengi
    paddingVertical: 15, // Dikey iç boşluk
    borderRadius: 8,
    alignItems: 'center', // Yazıyı ortala
    marginBottom: 15, // Buton altı boşluk
  },
  buttonText: {
    color: '#fff', // Beyaz yazı
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 12,
    color: '#007bff', // Link rengi
    textAlign: 'center', // Ortalanmış link
    fontSize: 14,
  },
});

export default RegisterScreen;
