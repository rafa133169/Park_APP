import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => {}}>

          <Ionicons name="settings-outline" size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Aparta tu lugar en Parkpal</Text>
          <TouchableOpacity style={styles.button} onPress={() => {   navigation.navigate('Find');
      console.log('Botón presionado');}
      }>
            <Text style={styles.buttonText}>Aparta tu lugar con Parkpal</Text>
          </TouchableOpacity>
        </View>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
    color: '#F39913',
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
});
