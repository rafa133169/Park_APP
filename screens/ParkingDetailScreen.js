import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const ParkingDetailScreen = ({ route, navigation }) => {
  const { parkingType } = route.params;
  const [selectedSpot, setSelectedSpot] = useState(null); // Estado para almacenar el cajón seleccionado

  // Función para manejar el clic en un espacio de estacionamiento
  const handleParkingSpotPress = (spotId) => {
    if (selectedSpot === spotId) {
      Alert.alert('¡Advertencia!', 'Este lugar ya está seleccionado.');
      return;
    }
    console.log(`Espacio de estacionamiento ${spotId + 1} seleccionado`);
    setSelectedSpot(spotId);
  };

  // Función para guardar y volver a la pantalla anterior
  const saveAndGoBack = () => {
    if (selectedSpot === null) {
      Alert.alert('¡Advertencia!', 'Por favor, selecciona un lugar antes de guardar.');
      return;
    }
    console.log(`Cajón ${selectedSpot + 1} seleccionado y guardado`);
    // Aquí puedes agregar la lógica para guardar el cajón seleccionado
    navigation.goBack(); // Vuelve a la pantalla anterior
  };

  // Calcula las dimensiones de los espacios de estacionamiento (puedes ajustarlas según tus necesidades)
  const parkingSpotWidth = 150;
  const parkingSpotHeight = 100;
  const margin = 10;

  // Genera los espacios de estacionamiento en la izquierda
  const renderLeftParkingSpots = () => {
    const spots = [];
    for (let i = 0; i < 5; i++) {
      const isSelected = selectedSpot === i;
      spots.push(
        <TouchableOpacity
          key={`parking_spot_${i}`}
          style={[styles.parkingSpot, { marginRight: margin }, isSelected && styles.selectedSpot]}
          onPress={() => handleParkingSpotPress(i)}
          disabled={isSelected}
        >
          <View style={styles.parkingSpotContent}>
            <Text style={styles.spotText}>{i + 1}</Text>
          </View>
        </TouchableOpacity>
      );
    }
    return spots;
  };

  // Genera los espacios de estacionamiento en la derecha
  const renderRightParkingSpots = () => {
    const spots = [];
    for (let i = 5; i < 10; i++) {
      const isSelected = selectedSpot === i;
      spots.push(
        <TouchableOpacity
          key={`parking_spot_${i}`}
          style={[styles.parkingSpot, { marginLeft: margin }, isSelected && styles.selectedSpot]}
          onPress={() => handleParkingSpotPress(i)}
          disabled={isSelected}
        >
          <View style={styles.parkingSpotContent}>
            <Text style={styles.spotText}>{i + 1}</Text>
          </View>
        </TouchableOpacity>
      );
    }
    return spots;
  };

  // Contador de lugares libres
  const availableSpots = 10 - (selectedSpot !== null ? 1 : 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estacionamiento</Text>
      <View style={styles.parkingMap}>
        <View style={styles.row}>
          <View style={styles.column}>
            {renderLeftParkingSpots()}
          </View>
          <View style={styles.centerColumn}>
            <Text style={styles.counterText}>{availableSpots} lugares libres</Text>
          </View>
          <View style={styles.column}>
            {renderRightParkingSpots()}
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={saveAndGoBack}>
        <Text style={styles.saveButtonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
  },
  parkingMap: {
    flexDirection: 'column',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  centerColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  parkingSpot: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
    marginBottom: 10,
    width: 250,
    height: 90,
  },
  selectedSpot: {
    backgroundColor: 'pink', // Cambia el color del cajón seleccionado
  },
  parkingSpotContent: {
    width: '80%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spotText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  saveButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  counterText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ParkingDetailScreen;
