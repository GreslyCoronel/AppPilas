import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

const HomeScreen = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Reciclaje de Pilas y Baterías</Text>

      {/* Sección 1: ¿Por qué es importante reciclar las pilas? */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>¿Por qué es importante reciclar las pilas?</Text>
        <Image source={require('../assets/Imagen1.jpg')} style={styles.image} />
        {expandedSections['whyRecycle'] && (
          <Text style={styles.text}>
            Las pilas y baterías contienen materiales tóxicos como el mercurio, cadmio y plomo, que son muy dañinos para el medio ambiente y la salud humana.
            Cuando no se reciclan adecuadamente, estos materiales pueden filtrarse en el suelo y en las fuentes de agua, contaminando el ecosistema.
          </Text>
        )}
        <TouchableOpacity onPress={() => toggleSection('whyRecycle')}>
          <Text style={styles.buttonText}>
            {expandedSections['whyRecycle'] ? 'Leer menos' : 'Leer más'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Sección 2: ¿Cómo reciclar las pilas correctamente? */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>¿Cómo reciclar las pilas correctamente?</Text>
        <Image source={require('../assets/Imagen2.jpg')} style={styles.image} />
        {expandedSections['howToRecycle'] && (
          <Text style={styles.text}>
            Es importante llevar las pilas y baterías usadas a puntos de reciclaje específicos. En lugar de tirarlas a la basura, busca contenedores especiales para pilas en tu comunidad.
            Muchas tiendas de electrodomésticos y supermercados tienen contenedores de reciclaje de pilas.
          </Text>
        )}
        <TouchableOpacity onPress={() => toggleSection('howToRecycle')}>
          <Text style={styles.buttonText}>
            {expandedSections['howToRecycle'] ? 'Leer menos' : 'Leer más'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Sección 3: Beneficios del reciclaje de pilas */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Beneficios del reciclaje de pilas</Text>
        <Image source={require('../assets/Imagen3.png')} style={styles.image} />
        {expandedSections['benefits'] && (
          <Text style={styles.text}>
            1. Protege el medio ambiente al evitar la contaminación de suelos y aguas.
            {"\n"}2. Reduce la necesidad de extraer nuevos materiales y recursos naturales.
            {"\n"}3. Fomenta una cultura de reciclaje y sostenibilidad.
          </Text>
        )}
        <TouchableOpacity onPress={() => toggleSection('benefits')}>
          <Text style={styles.buttonText}>
            {expandedSections['benefits'] ? 'Leer menos' : 'Leer más'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Sección 4: Consejos para el manejo de pilas y baterías */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Consejos para el manejo de pilas y baterías</Text>
        <Image source={require('../assets/Imagen4.jpg')} style={styles.image} />
        {expandedSections['tips'] && (
          <Text style={styles.text}>
            - No las deseches en la basura común. Siempre busca un punto de reciclaje.
            {"\n"}- Si las pilas están dañadas o hinchadas, no las manipules y llévalas a un punto de reciclaje especializado.
          </Text>
        )}
        <TouchableOpacity onPress={() => toggleSection('tips')}>
          <Text style={styles.buttonText}>
            {expandedSections['tips'] ? 'Leer menos' : 'Leer más'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Sección 5: Símbolos en pilas y baterías */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Símbolos en pilas y baterías</Text>
        <Image source={require('../assets/Imagen1.jpg')} style={styles.image} />
        {expandedSections['symbols'] && (
          <Text style={styles.text}>
            Cada símbolo en las pilas y baterías indica información importante. Por ejemplo:
            {"\n"}- El símbolo de reciclaje indica que debe reciclarse en puntos específicos.
            {"\n"}- El símbolo de sustancias químicas peligrosas alerta sobre materiales tóxicos.
          </Text>
        )}
        <TouchableOpacity onPress={() => toggleSection('symbols')}>
          <Text style={styles.buttonText}>
            {expandedSections['symbols'] ? 'Leer menos' : 'Leer más'}
          </Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2c3e50',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#34495e',
  },
  text: {
    fontSize: 16,
    color: '#2d3436',
    textAlign: 'justify',
    marginTop: 10,
  },
  buttonText: {
    color: '#007bff',
    marginTop: 10,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default HomeScreen;