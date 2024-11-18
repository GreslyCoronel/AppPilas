import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { RadioButton, TextInput } from 'react-native-paper';

const Survey = () => {
  const [question1, setQuestion1] = useState('');
  const [question2, setQuestion2] = useState('');
  const [question3, setQuestion3] = useState('');
  const [question4, setQuestion4] = useState('');

  const handleSubmit = () => {
    // Aquí puedes manejar el envío de las respuestas, por ejemplo, guardarlas en la base de datos
    console.log({ question1, question2});
  };

  

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>REGISTRO DE PILAS</Text>

      <Text style={styles.question}>Seleccione número de dimension de la pila</Text>
      <RadioButton.Group onValueChange={newValue => setQuestion1(newValue)} value={question1}>
        <RadioButton.Item label="6F22 9V" value="6F22" />
        <RadioButton.Item label="R6 AA 1,5V" value="R6" />
        <RadioButton.Item label="R03 AAA 1,5V" value="R03" />
        <RadioButton.Item label="LI-ION 3,7 V" value="RYX-NX9" />
        <RadioButton.Item label="NO PRESENTA DIMENSIONES" value="NO" />
      </RadioButton.Group>

      <Text style={styles.question}>¿Se encuentra en buen estado? </Text>
      <RadioButton.Group onValueChange={newValue => setQuestion2(newValue)} value={question2}>
        <RadioButton.Item label="SI" value="SI" />
        <RadioButton.Item label="NO" value="NO" />
    </RadioButton.Group>


      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar registro</Text>
      </TouchableOpacity>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40, // Espacio adicional para ver el botón al final
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#2e8b57',
  },
  question: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  button: {
    backgroundColor: 'green',
    padding: 12,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Survey;