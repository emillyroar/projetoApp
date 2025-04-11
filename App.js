import { StatusBar } from 'expo-status-bar';
import { Camera } from 'lucide-react-native';
import { useState } from 'react';
import { Pressable } from 'react-native'; 
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    Alert.alert(`Login realizado!`, `Seja bem vindo ${userName}!`);
    setTimeout(() => {
      setUserName('');
      setPassword('');
    }, 100);
  };

  return (
    <View style={styles.container}>
      <Camera 
        style={styles.camera} 
        width={90} 
        height={90} 
        color={"#333"} 
      />
      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder="Telefone, nome de usuário ou email" 
          value={userName} 
          onChangeText={setUserName} 
        />
        <TextInput 
          secureTextEntry 
          style={styles.input} 
          placeholder="Senha" 
          value={password}
          onChangeText={setPassword}
        />
        <Pressable
       onPress={handleLogin}
      style={({ pressed }) => [
      styles.loginButton,
    { backgroundColor: pressed ? '#80b3ff' : '#4f83ff' } // muda de cor!
  ]}
>
      <Text style={styles.loginButtonText}>Log In</Text>
        </Pressable>
        <TouchableOpacity style={styles.forgotPasswordBtn}>
          <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    marginBottom: 14,
  },
  form: {
    width: '100%',
    padding: 24,
  },
  input: {
    height: 50,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 14,
  },
  loginButton: {
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    fontSize: 14,
    color: '#fff',
  },
  forgotPasswordBtn: {
    marginTop: 14,
  },
  forgotPassword: {
    fontSize: 12,
    color: '#2d5bff',
    textAlign: 'right',
  }
});