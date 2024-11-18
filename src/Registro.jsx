import React from 'react';
import { Formik } from 'formik';
import { Text, TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';

const initialValues = {
  nombres: '',
  apellidos: '',
  identificacion: '',
  celular: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export default function RegisterPage({ navigation }) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => {
        console.log('Datos del usuario registrado:', values);
        // Aquí debes agregar la lógica para registrar al usuario
        navigation.navigate('Login'); // Redirige al login después de registrarse
      }}
    >
      {({ handleChange, handleSubmit, values }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Registro</Text>

          <TextInput
            value={values.nombres}
            onChangeText={handleChange('nombres')}
            placeholder="Nombres"
            style={styles.input}
          />

          <TextInput
            value={values.apellidos}
            onChangeText={handleChange('apellidos')}
            placeholder="Apellidos"
            style={styles.input}
          />

          <TextInput
            value={values.identificacion}
            onChangeText={handleChange('identificacion')}
            placeholder="Identificación"
            style={styles.input}
          />

          <TextInput
            value={values.celular}
            onChangeText={handleChange('celular')}
            placeholder="Celular"
            style={styles.input}
          />

          <TextInput
            value={values.email}
            onChangeText={handleChange('email')}
            placeholder="Correo electrónico"
            style={styles.input}
          />

          <TextInput
            value={values.password}
            onChangeText={handleChange('password')}
            placeholder="Contraseña"
            secureTextEntry
            style={styles.input}
          />

          <TextInput
            value={values.confirmPassword}
            onChangeText={handleChange('confirmPassword')}
            placeholder="Confirmar Contraseña"
            secureTextEntry
            style={styles.input}
          />
          
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Registrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.NoCuenta}>¿Ya tienes cuenta? Inicia sesión</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    paddingStart: 30,
    padding: 10,
    marginTop: 15,
    borderRadius: 30,
    backgroundColor: 'white',
    width: '100%',
  },
  button: {
    borderRadius: 30,
    marginTop: 20,
    alignItems: 'center', 
    justifyContent: 'center', 
    height: 50, 
    backgroundColor: '#4CAF50',
    width: '50%', 
    alignSelf: 'center', 
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  NoCuenta: {
    fontSize: 15,
    color: 'gray',
    padding: 10,
    alignSelf: 'center', 
  },
});