import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../api/firebase';

const RegisterScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Başarılı', 'Kayıt oluşturuldu.');
      navigation.navigate('Home');  // Kayıt başarılıysa Home ekranına yönlendir
    } catch (error: any) {
      Alert.alert('Hata', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kayıt Ol</Text>
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
      <Button title="Kayıt Ol" onPress={handleRegister} />
      <Text onPress={() => navigation.navigate('Login')} style={styles.link}>
        Zaten hesabın var mı? Giriş yap
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

export default RegisterScreen;
