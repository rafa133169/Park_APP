import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Ionicons } from '@expo/vector-icons'; // Importar el componente Ionicons

export default function SignupScreen({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmarContraseña, setConfirmarContraseña] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar la contraseña
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Estado para mostrar/ocultar la confirmación de la contraseña

  const handleRegistro = async () => {
    if (!nombre || !email || !contraseña || !confirmarContraseña) {
      setError('Por favor completa todos los campos');
      return;
    }

    if (contraseña !== confirmarContraseña) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, contraseña);
      await updateProfile(userCredential.user, { displayName: nombre }); // Establecer el nombre de usuario
      setError('');
      navigation.navigate('Main');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('El correo electrónico ya está en uso');
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrarse</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholderTextColor="gray" // Color gris para el placeholder
          placeholder="Nombre de usuario"
          onChangeText={text => setNombre(text)}
          value={nombre}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="gray" // Color gris para el placeholder
          placeholder="Correo electrónico"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholderTextColor="gray" // Color gris para el placeholder
            placeholder="Contraseña"
            onChangeText={text => setContraseña(text)}
            value={contraseña}
            secureTextEntry={!showPassword} // Utiliza el estado showPassword para mostrar/ocultar la contraseña
          />
          <TouchableOpacity style={styles.iconButton} onPress={() => setShowPassword(!showPassword)}>
            <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="gray" />
          </TouchableOpacity>
        </View>
        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholderTextColor="gray" // Color gris para el placeholder
            placeholder="Confirmar contraseña"
            onChangeText={text => setConfirmarContraseña(text)}
            value={confirmarContraseña}
            secureTextEntry={!showConfirmPassword} // Utiliza el estado showConfirmPassword para mostrar/ocultar la confirmación de la contraseña
          />
          <TouchableOpacity style={styles.iconButton} onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Ionicons name={showConfirmPassword ? 'eye-off' : 'eye'} size={24} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={[styles.button, styles.signupButton]} onPress={handleRegistro}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
      {error ? <Text style={styles.errorMessage}>{error}</Text> : null}
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
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  iconButton: {
    position: 'absolute',
    right: 10,
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
  errorMessage: {
    color: 'red',
    marginTop: 10,
  },
});
