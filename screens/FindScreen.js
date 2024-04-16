import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { Card } from 'react-native-elements';
import Navbar from './navbar'; // Importa tu componente personalizado Navbar
import Footer from './Footer'; // Importa tu componente personalizado Footer
import { getAuth, signOut } from 'firebase/auth'; // Importa los métodos necesarios para autenticación

const FindScreen = ({ navigation }) => {
  const windowWidth = Dimensions.get('window').width;
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
          <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Find'); console.log('Botón presionado'); }}>
            <Text style={styles.buttonText}>Buscar lugares cerca</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('ParkingDetail', { parkingType: 'Carro' })}>
            <Card
              containerStyle={styles.card}
              titleStyle={styles.cardTitle}
            >
              <Card.Title>Carro</Card.Title>
              <Card.Divider/>
              <Image
                source={require('../img/carrito.png')}
                style={styles.image}
              />
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ParkingDetail', { parkingType: 'Moto' })}>
            <Card
              containerStyle={styles.card}
              titleStyle={styles.cardTitle}
            >
              <Card.Title>Moto</Card.Title>
              <Card.Divider/>
              <Image
                source={require('../img/moto.png')}
                style={styles.image}
              />
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ParkingDetail', { parkingType: 'Camioneta' })}>
            <Card
              containerStyle={styles.card}
              titleStyle={styles.cardTitle}
            >
              <Card.Title>Camioneta</Card.Title>
              <Card.Divider/>
              <Image
                source={require('../img/camioneta.png')}
                style={styles.image}
              />
            </Card>
          </TouchableOpacity>
        </View>
        <Image
          source={require('../img/carro3.png')}
          style={styles.imageBigcar}
        />
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  header: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#F39913',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'Arial',
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  card: {
    width: (Dimensions.get('window').width - 60) / 3,
    borderRadius: 10,
    backgroundColor: '#F39913',
  },
  cardTitle: {
    color: '#000',
    fontSize: 14,
    marginBottom: 5,
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: 'center',
  },
  imageBigcar: {
    width: '80%',
    height: '40%',
    resizeMode: 'contain',
    marginBottom: 20,
  },
});

export default FindScreen;
