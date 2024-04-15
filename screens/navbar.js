import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getAuth, signOut } from 'firebase/auth';

const Navbar = ({ userName, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

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
    <View style={styles.navbar}>
      <Text style={styles.welcomeText}>Bienvenido a ParkPal, {userName}!</Text>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Ionicons name="settings-outline" size={24} color="#ffffff" />
      </TouchableOpacity>
      {/* Modal de opciones */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity onPress={handleLogout} style={styles.modalItem}>
              <Ionicons name="log-out-outline" size={24} color="black" />
              <Text style={styles.modalText}>Cerrar Sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalItem}>
              <Ionicons name="close-outline" size={24} color="black" />
              <Text style={styles.modalText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#F39913',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  welcomeText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  modalText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default Navbar;
