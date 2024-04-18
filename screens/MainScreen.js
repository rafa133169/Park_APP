import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getAuth, signOut } from 'firebase/auth';
import Footer from './Footer';
import Navbar from './navbar';

export default function MainScreen({ navigation }) {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Obtener el nombre de usuario al cargar la pantalla
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      setUserName(user.displayName);
    }
  }, []);

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error al cerrar sesión:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Navbar userName={userName} navigation={navigation} />

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Aparta tu lugar en Parkpal</Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Find')}>
            <Text style={styles.buttonText}>Buscar lugares cerca</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Footer navigation={navigation} />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Cambio de color de fondo
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#F39913',
    marginBottom: 20,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#f4cd28',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  
});
