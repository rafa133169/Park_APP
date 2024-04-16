import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Modal, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getAuth, signOut, reauthenticateWithCredential, EmailAuthProvider, updatePassword } from 'firebase/auth';
import Footer from './Footer';

const AccountScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0)); // Estado para controlar la animación de desvanecimiento
  // En el estado del componente, agrega un estado para controlar la visibilidad de la contraseña
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
  // Estado para el formulario de cambio de contraseña
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    // Obtener el nombre de usuario y el correo electrónico al cargar la pantalla
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      setUserName(user.displayName);
      setUserEmail(user.email);
    }
  }, []);

  useEffect(() => {
    if (modalVisible) {
      // Anima la opacidad al abrir el modal
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      // Anima la opacidad al cerrar el modal
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [modalVisible, fadeAnim]);

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error al cerrar sesión:', error.message);
    }
  };

  const handleChangePassword = async () => {
    try {
      if (!currentPassword || !newPassword || !confirmNewPassword) {
        setPasswordError('Por favor completa todos los campos');
        return;
      }

      if (newPassword !== confirmNewPassword) {
        setPasswordError('Las contraseñas no coinciden');
        return;
      }

      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        const credential = EmailAuthProvider.credential(user.email, currentPassword);
        await reauthenticateWithCredential(user, credential);
        await updatePassword(user, newPassword);
        setPasswordError('');
        setModalVisible(false);
        // Aquí podrías mostrar un mensaje de éxito
      }
    } catch (error) {
      setPasswordError(error.message);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Cuenta de Usuario</Text>
        <Text style={styles.userInfo}>Nombre de Usuario: {userName}</Text>
        <Text style={styles.userInfo}>Correo Electrónico: {userEmail}</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.changePasswordButton}>
          <Text style={styles.changePasswordButtonText}>Cambiar Contraseña</Text>
        </TouchableOpacity>

        {/* Modal de cambio de contraseña */}
        <Modal
          animationType="fade" // Cambia la animación a desvanecimiento
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <Animated.View style={[styles.centeredView, { opacity: fadeAnim }]}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Cambiar Contraseña</Text>
              <TextInput
                style={styles.input}
                placeholder="Contraseña actual"
                placeholderTextColor="gray" // Color gris para el placeholder
                secureTextEntry={true}
                value={currentPassword}
                onChangeText={(text) => setCurrentPassword(text)}
              />
              <View style={styles.passwordInputContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Nueva Contraseña"
                  placeholderTextColor="gray" // Color gris para el placeholder
                  secureTextEntry={!showNewPassword}
                  value={newPassword}
                  onChangeText={(text) => setNewPassword(text)}
                />
                <TouchableOpacity style={styles.iconButton} onPress={() => setShowNewPassword(!showNewPassword)}>
                  <Ionicons name={showNewPassword ? 'eye-off' : 'eye'} size={24} color="gray" />
                </TouchableOpacity>
              </View>
              <View style={styles.passwordInputContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Confirmar Nueva Contraseña"
                  placeholderTextColor="gray" // Color gris para el placeholder
                  secureTextEntry={!showConfirmNewPassword}
                  value={confirmNewPassword}
                  onChangeText={(text) => setConfirmNewPassword(text)}
                />
                <TouchableOpacity style={styles.iconButton} onPress={() => setShowConfirmNewPassword(!showConfirmNewPassword)}>
                  <Ionicons name={showConfirmNewPassword ? 'eye-off' : 'eye'} size={24} color="gray" />
                </TouchableOpacity>
              </View>
              {passwordError ? <Text style={styles.errorMessage}>{passwordError}</Text> : null}
              <TouchableOpacity onPress={handleChangePassword} style={styles.modalButton}>
                <Text style={styles.buttonText}>Cambiar Contraseña</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </Modal>

        <TouchableOpacity onPress={handleLogout} style={[styles.button, styles.logoutButton]}>
          <Text style={[styles.buttonText, styles.logoutButtonText]}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>

      <Footer navigation={navigation}/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 50, // Ajusta el espacio en la parte inferior para el footer
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userInfo: {
    fontSize: 18,
    marginBottom: 20,
  },
  changePasswordButton: {
    backgroundColor: '#F39913',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  changePasswordButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro transparente
  },
  modalView: {
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
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
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
  errorMessage: {
    color: 'red',
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: '#F39913',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    marginTop: 20,
  },
  logoutButtonText: {
    color: '#F39913',
  },
});

export default AccountScreen;
