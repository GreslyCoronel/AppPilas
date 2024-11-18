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
    console.log({ question1, question2, question3, question4 });
  };

  

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>Mide tus conocimientos</Text>

      <Text style={styles.question}>1. ¿Cuántas pilas consumes anualmente en tu hogar?</Text>
      <RadioButton.Group onValueChange={newValue => setQuestion1(newValue)} value={question1}>
        <RadioButton.Item label="Menos de 5" value="menos_5" />
        <RadioButton.Item label="Entre 5 y 20" value="5_20" />
        <RadioButton.Item label="Entre 21 y 50" value="21_50" />
        <RadioButton.Item label="Más de 50" value="mas_50" />
      </RadioButton.Group>

      <Text style={styles.question}>2. ¿Tienes conocimiento sobre puntos de recolección de pilas en tu área?</Text>
      <RadioButton.Group onValueChange={newValue => setQuestion2(newValue)} value={question2}>
        <RadioButton.Item label="Sí, conozco varios lugares" value="si_varios" />
        <RadioButton.Item label="Sé que hay, pero no sé dónde están" value="se_no" />
        <RadioButton.Item label="No, no tengo idea de que existan" value="no_existen" />
        <RadioButton.Item label="No estoy seguro/a" value="no_seguro" />
      </RadioButton.Group>

      <Text style={styles.question}>3. ¿Qué haces generalmente con las pilas que ya no utilizas?</Text>
      <RadioButton.Group onValueChange={newValue => setQuestion3(newValue)} value={question3}>
        <RadioButton.Item label="Las tiro a la basura común" value="basura" />
        <RadioButton.Item label="Las guardo en casa" value="guardarlas" />
        <RadioButton.Item label="Las llevo a un punto de recolección" value="recoleccion" />
        <RadioButton.Item label="No uso pilas" value="no_uso" />
      </RadioButton.Group>

      <Text style={styles.question}>4. ¿Conoces la cantidad de residuos que se generan por el mal manejo de pilas?</Text>
      <RadioButton.Group onValueChange={newValue => setQuestion4(newValue)} value={question4}>
        <RadioButton.Item label="Sí, es un problema grave" value="si" />
        <RadioButton.Item label="Sé que es un problema, pero no conozco la cantidad" value="no_conozco_cantidad" />
        <RadioButton.Item label="No, no tengo idea" value="no" />
        <RadioButton.Item label="No creo que sea un problema significativo" value="no_creo" />
      </RadioButton.Group>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar Respuestas</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Ver Resultados</Text>
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
