import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { Card } from 'react-native-elements';

const FindScreen = ({ navigation }) => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    alignSelf: 'center',
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
  imageBigcar: {
    width: '100%',
    height: '70%',
    resizeMode: 'contain',
  },
});

export default FindScreen;
