import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../api/firebase';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Giriş Başarılı');
      navigation.navigate('Home');  // Giriş başarılıysa Home ekranına yönlendir
    } catch (error: any) {
      Alert.alert('Hata', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giriş Yap</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Giriş Yap" onPress={handleLogin} />
      <Text onPress={() => navigation.navigate('Register')} style={styles.link}>
        Hesabın yok mu? Kayıt ol
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 60 },
  input: { borderWidth: 1, marginBottom: 12, padding: 8 },
  title: { fontSize: 22, marginBottom: 16 },
  link: { marginTop: 12, color: 'blue' },
});

export default LoginScreen;
