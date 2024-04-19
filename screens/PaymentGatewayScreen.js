import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView, Alert } from 'react-native';
import { Card, TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';


const PaymentGatewayScreen = () => {

  const navigation = useNavigation();
  const [cardNumber, setCardNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  const validateFields = () => {
    if (cardNumber.trim() !== '' && fullName.trim() !== '' && expiry.trim() !== '' && cvv.trim() !== '') {
      setAllFieldsFilled(true);
    } else {
      setAllFieldsFilled(false);
    }
  };

  const handlePayment = () => {
    if (!allFieldsFilled) {
      Alert.alert('Por favor, complete todos los campos antes de pagar');
      return;
    }

    // Aquí iría la lógica para realizar el pago

    Alert.alert('Éxito', 'Pago realizado exitosamente');
    // Aquí podrías navegar a la pantalla de pago exitoso si es necesario
    navigation.navigate('Exitoso');
  };

  return (
    <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
  >
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.welcomeText}>Método de pago</Text>
        </View>
        <Text style={[styles.paymentText, { marginLeft: 20 }]}>Pago con tarjeta</Text>
        <View style={styles.totalContainer}>
          <Text style={[styles.totalLabel, { color: 'green', marginLeft: 20 }]}>Total a pagar:</Text>
          <Card style={[styles.totalButton, { backgroundColor: '#FFBA82' }]}>
            <Text style={[styles.totalText, { color: 'black' }]}>$150.00</Text>
          </Card>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/Tarjeta-BBVA-Visa-Clasica-1.png')} style={styles.image} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            mode="outlined"
            label="Número de tarjeta"
            style={styles.input}
            value={cardNumber}
            onChangeText={(text) => {
              setCardNumber(text);
              validateFields();
            }}
          />
          <TextInput
            mode="outlined"
            label="Nombre completo"
            style={styles.input}
            value={fullName}
            onChangeText={(text) => {
              setFullName(text);
              validateFields();
            }}
          />
          <View style={styles.row}>
            <TextInput
              mode="outlined"
              label="MM/YY"
              style={[styles.input, { flex: 1 }]}
              value={expiry}
              onChangeText={(text) => {
                setExpiry(text);
                validateFields();
              }}
            />
            <TextInput
              mode="outlined"
              label="CVV"
              style={[styles.input, { flex: 1 }]}
              value={cvv}
              onChangeText={(text) => {
                setCvv(text);
                validateFields();
              }}
            />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={[styles.button, { opacity: allFieldsFilled ? 1 : 0.5 }]}
            onPress={handlePayment}
            disabled={!allFieldsFilled}
          >
            <Text style={styles.buttonText}>Pagar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  </KeyboardAvoidingView>
);
};
export default PaymentGatewayScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topContainer: {
    backgroundColor: '#EFBD28',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingVertical: 20,
  },
  welcomeText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  paymentText: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  totalLabel: {
    fontSize: 16,
    color: 'green',
    marginRight: 10,
  },
  totalButton: {
    borderRadius: 5,
    padding: 15,
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    width: 370,
    height: 200,
  },
  inputContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  button: {
    marginTop: 40,
    backgroundColor: '#EFBD28',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
