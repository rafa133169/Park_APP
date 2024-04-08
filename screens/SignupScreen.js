import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function SignupScreen({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleRegistro = () => {
    // Aquí puedes agregar la lógica para registrar al usuario con los datos ingresados
    // Por ejemplo, enviar los datos a una API o guardarlos localmente
    console.log('Registrando usuario:', { nombre, email, contraseña });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrarse</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          onChangeText={text => setNombre(text)}
          value={nombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          onChangeText={text => setContraseña(text)}
          value={contraseña}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={[styles.button, styles.signupButton]} onPress={handleRegistro}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    marginBottom: 10,
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: '#F39913',
  },
  formContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  signupButton: {
    backgroundColor: '#F39913',
  },
});
