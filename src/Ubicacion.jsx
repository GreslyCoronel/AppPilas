import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, Alert } from 'react-native';
import * as Location from 'expo-location'; // Importa expo-location

export default function LotesRellenoSanitario() {
  const polideportivoCoords = {
    latitude: 8.23667, 
    longitude: -73.32083, 
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  };

  const lotes = [
    { id: 1, title: "Lote 1", latitude: 8.2405, longitude: -73.3287, advertencia: false },
    { id: 2, title: "Lote 2", latitude: 8.2406, longitude: -73.3286, advertencia: false },
    { id: 3, title: "Lote 3", latitude: 8.2407, longitude: -73.3288, advertencia: false },
    { id: 4, title: "Lote 4", latitude: 8.2410, longitude: -73.3290, advertencia: true },
  ];

  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Solicitar permisos de ubicación
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync(); // Solicita permisos de primer plano
      if (status !== 'granted') {
        Alert.alert("Permiso denegado", "Necesitamos acceso a tu ubicación para continuar.");
        return;
      }

      // Obtener la ubicación del usuario
      let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
      setUserLocation(location.coords);
      checkLote(location.coords.latitude, location.coords.longitude);
    })();
  }, []);

  const checkLote = (latitude, longitude) => {
    lotes.forEach(lote => {
      const distance = getDistance(latitude, longitude, lote.latitude, lote.longitude);
      if (distance < 0.0001) {
        if (lote.advertencia) {
          Alert.alert("Advertencia", `Estás sobre el ${lote.title}. ¡No se deben depositar pilas aquí porque hay agua!`);
        } else {
          Alert.alert("Ubicación", `Estás sobre el ${lote.title}. Puedes depositar pilas aquí.`);
        }
      }
    });
  };

  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; 
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };

  const deg2rad = (deg) => deg * (Math.PI / 180);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: polideportivoCoords.latitude,
          longitude: polideportivoCoords.longitude,
          latitudeDelta: polideportivoCoords.latitudeDelta,
          longitudeDelta: polideportivoCoords.longitudeDelta,
        }}
      >
        {lotes.map(lote => (
          <Marker key={lote.id} coordinate={{ latitude: lote.latitude, longitude: lote.longitude }} title={lote.title}>
            {lote.advertencia && (
              <View style={styles.advertencia}>
                <Text style={styles.advertenciaText}>¡Advertencia! No deposites pilas aquí.</Text>
              </View>
            )}
          </Marker>
        ))}

        {userLocation && (
          <Marker coordinate={{ latitude: userLocation.latitude, longitude: userLocation.longitude }} title="Tu ubicación" pinColor="blue" />
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { width: '100%', height: '100%' },
  advertencia: { backgroundColor: 'rgba(255, 0, 0, 0.6)', padding: 5, borderRadius: 5 },
  advertenciaText: { color: 'white', fontWeight: 'bold' },
});
