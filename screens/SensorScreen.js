import React, { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import SerialPort from 'react-native-serialport';

const SensorScreen = () => {
  const [sensorData, setSensorData] = useState([]);

  useEffect(() => {
    const readData = async () => {
      try {
        await SerialPort.requestPermission();
        await SerialPort.open({
          baudRate: 9600,
          dataBits: 8,
          stopBits: 1,
          parity: 'none',
        });
        SerialPort.onDataReceived(data => {
          setSensorData(prevData => [...prevData, data]);
        });
      } catch (error) {
        console.error(error);
      }
    };

    readData();

    return () => {
      SerialPort.close();
    };
  }, []);

  return (
    <ScrollView>
      {sensorData.map((data, index) => (
        <Text key={index}>{data}</Text>
      ))}
    </ScrollView>
  );
};

export default SensorScreen;
