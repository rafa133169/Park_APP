import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getAuth, signOut } from 'firebase/auth';
import { Card } from 'react-native-elements';
import Footer from './Footer';
import Navbar from './navbar'; // Importa el componente Navbar

const FindScreen = ({ navigation }) => {
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
      {/* Usa el componente Navbar */}
      <Navbar userName={userName} navigation={navigation} />

      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Encuentra tu</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Find');
              console.log('Botón presionado');
            }}
          >
            <Text style={styles.buttonText}>Lugar de estacionamiento</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
          <Card containerStyle={styles.card} titleStyle={styles.cardTitle}>
            <Card.Title>Carro</Card.Title>
            <Card.Divider />
            <Image source={require('../img/carrito.png')} style={styles.image} />
            <Text style={styles.cardText}></Text>
          </Card>
          <Card containerStyle={styles.card} titleStyle={styles.cardTitle}>
            <Card.Title>Moto</Card.Title>
            <Card.Divider />
            <Image source={require('../img/moto.png')} style={styles.image} />
          </Card>
          <Card containerStyle={styles.card} titleStyle={styles.cardTitle}>
            <Card.Title>Camioneta</Card.Title>
            <Card.Divider />
            <Image source={require('../img/camioneta.png')} style={styles.image} />
          </Card>
        </View>
        <Image source={require('../img/carro3.png')} style={styles.imageBigcar} />
      </View>
     
     <Footer navigation={navigation}/>

      {/* Modal de opciones */}
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  welcomeText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
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
    color: '#FFFFFF',
    marginBottom: 20,
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#F39913',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
 
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  card: {
    width: (Dimensions.get('window').width - 40) / 3,
    borderRadius: 10,
    backgroundColor: '#F39913',
    marginHorizontal: 5,
  },
  cardTitle: {
    color: '#000',
    fontSize: 16,
    marginBottom: 5,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    alignContent: 'center',
    marginLeft: 50,
    flex: 1,
  },
  imageBigcar: {
    textAlign: 'center',
    width: 200,
    height: 200,
    marginLeft: 50,
  },
  cardText: {
    color: '#ffff',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
});

export default FindScreen;
