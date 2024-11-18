/*import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Camera } from 'expo-camera';

const QrScanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState('');
  const [scannedQRCodes, setScannedQRCodes] = useState([]); // Para evitar escaneos duplicados

  const [camera, setCamera] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    if (scannedQRCodes.includes(data)) {
      // Si el código ya ha sido escaneado
      Alert.alert('Advertencia', 'Este código QR ya ha sido registrado.');
      return;
    }

    setScanned(true);
    setData(data);
    setScannedQRCodes([...scannedQRCodes, data]); // Añadir a la lista de códigos escaneados
    alert(`Código QR escaneado con éxito: ${data}`);

    // Aquí podrías integrar la lógica de clasificación automática
    classifyBattery(data);
  };

  const classifyBattery = (data) => {
    // Lógica para clasificar la pila/batería
    const batteryType = getBatteryTypeFromQR(data);

    if (batteryType) {
      alert(`Clasificación automática: ${batteryType}`);
      // Aquí guardarías la clasificación automáticamente
    } else {
      alert('No se pudo clasificar automáticamente, por favor clasifique manualmente.');
    }
  };

  const getBatteryTypeFromQR = (data) => {
    // Aquí procesas los datos del QR para determinar el tipo de batería
    const batteryData = {
      'Alcalina': ['001', '002'],
      'Litio': ['003', '004'],
      'Níquel-Cadmio': ['005', '006'],
    };
    // Ejemplo básico, dependiendo del código QR, puedes decidir el tipo
    for (let type in batteryData) {
      if (batteryData[type].includes(data)) {
        return type;
      }
    }
    return null;
  };

  if (hasPermission === null) {
    return <Text>Solicitando permiso para acceder a la cámara...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No se ha concedido acceso a la cámara</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.scannerContainer}>
        <Camera
          style={StyleSheet.absoluteFillObject}
          type={Camera.Constants.Type.back}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          ref={(ref) => setCamera(ref)}
        >
          <View style={styles.overlay} />
        </Camera>
      </View>
      {scanned && (
        <TouchableOpacity style={styles.button} onPress={() => setScanned(false)}>
          <Text style={styles.buttonText}>Escanear de nuevo</Text>
        </TouchableOpacity>
      )}
      {data ? <Text style={styles.text}>Dato escaneado: {data}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scannerContainer: {
    width: '90%',
    height: '70%',
    borderWidth: 2,
    borderColor: 'green',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  text: {
    fontSize: 18,
    margin: 20,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default QrScanner;
*/
