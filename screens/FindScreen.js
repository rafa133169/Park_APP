import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions,  Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { Card } from 'react-native-elements'; // Importa el componente Card

// Define el componente FindScreen
const FindScreen = () => {
  // Obtén el ancho de la ventana
  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="settings-outline" size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Encuentra tu</Text>
          <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Find'); console.log('Botón presionado'); }}>
            <Text style={styles.buttonText}>Lugar de estacionamiento</Text>
          </TouchableOpacity>
        </View>
        {/* Agrega un Card aquí */}
        <View style={styles.cardContainer}>
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
            <Text style={styles.cardText}></Text>
          </Card>
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
        </View>
        <Image
        source={require('../img/carro3.png')}
        style={styles.imageBigcar}
      />
      </View>
      <View style={styles.footer}>
     
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="car-outline" size={24} color="#F39913" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="calendar-outline" size={24} color="#F39913" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="person-outline" size={24} color="#F39913" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    alignContent: 'center',
    marginLeft: 50,
    flex : 1,
  },
  navbar: {
    backgroundColor: '#F39913',
    alignItems: 'flex-end',
    padding: 10,
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingVertical: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  card: {
    width: (Dimensions.get('window').width - 40) / 3, // Calculamos el ancho de cada tarjeta para que quepan tres en una fila
    borderRadius: 10,
    backgroundColor: '#F39913',
    marginHorizontal: 5,
  },
  cardTitle: {
    color: '#000',
    fontSize: 16,
    marginBottom: 5,
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
});

export default FindScreen;
