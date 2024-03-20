import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function App() {
  const data = 'Texto a codificar en el código QR';

  return (
    <View style={styles.container}>

<Image
          source={require('./img/carro.png')}
          style={styles.imagen}
        />
      <Text>ParkPal, tu Estacionamiento inteligente</Text>
      <QRCode
        value={data}
        size={200}
      />
     
       
      </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#21196F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginTop: 20,
    width: 60, // Ancho del contenedor del icono
    height: 60, // Altura del contenedor del icono
    borderRadius: 30, // Mitad del ancho o la altura para un círculo perfecto
    backgroundColor: 'white', // Color de fondo del contenedor del icono
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagen: {
    width: 180, // Ancho de la imagen
    height: 180, // Altura de la imagen
    borderRadius: 80, // Mitad del ancho o la altura para un círculo perfecto
  },
});
