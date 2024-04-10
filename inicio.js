import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Registrate</Text>
        </View>  
            
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagen: {
        width: 180,
        height: 180,
        borderRadius: 80,
    },
    title:{
        color: '#FCE019',
        fontSize: 20,
        marginTop: 20,
        paddingBottom: 500,
        fontWeight: 'bold',
    },
    subtitle:{
        color: '#FCE019',
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
    },
    button1:{
        backgroundColor: '#FCE019',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
        borderRadius: 5,
        width: 180,
        textAlign: 'center',
        alignItems : 'center',
    },
    button:{
        backgroundColor: '#E8E6E6',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
        borderRadius: 5,
        width: 180,
        textAlign: 'center',
        alignItems : 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonTexto: {
        color: '#A1A1A1',
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default SettingsScreen;