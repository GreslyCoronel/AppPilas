import React from 'react';
import { Formik } from 'formik';
import { Text, TextInput, View, TouchableOpacity, StyleSheet, Image, Dimensions, StatusBar } from 'react-native';
import * as Yup from 'yup';

const { width, height } = Dimensions.get('window'); // Dimensiones de la pantalla

// Esquema de validación
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Por favor, ingresa un correo válido')
    .required('El correo es obligatorio'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es obligatoria'),
});

const initialValues = {
  email: '',
  password: '',
};

export default function Login({ navigation }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => {
        console.log(values);
        navigation.navigate('Main');
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.container}>
          {/* Barra de estado personalizada */}
          <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent={true} />

          {/* Imagen superior */}
          <Image source={require('../assets/Login.jpg')} style={styles.image} />

          {/* Título y subtítulo */}
          <Text style={styles.titleText}>PILAS VERDES</Text>
          <Text style={styles.subTitleText}>Accede a tu cuenta</Text>

          {/* Inputs */}
          <TextInput
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            placeholder="Correo electrónico"
            style={styles.input}
          />
          {touched.email && errors.email && (
            <Text style={styles.errorText}>{errors.email}</Text>
          )}

          <TextInput
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            placeholder="Contraseña"
            secureTextEntry
            style={styles.input}
          />
          {touched.password && errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}

          {/* Contraseña olvidada */}
          <Text style={styles.forgotPassword}>¿Olvidaste tu Contraseña?</Text>

          {/* Botón de inicio de sesión */}
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>

          {/* Registro */}
          <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
            <Text style={styles.registerText}>¿No tienes cuenta? Registrate aquí</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: width,
    height: height * 0.35, // Ajusta la altura de la imagen
    resizeMode: 'cover', // Cubre el espacio sin deformarse
  },
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#4CAF50', // Color verde que combina con la imagen
    textAlign: 'center',
    marginTop: 10,
  },
  subTitleText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '85%',
    padding: 15,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#F5F5F5',
    //elevation: 5, // Sombra para el input
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  forgotPassword: {
    fontSize: 15,
    color: 'grey',
    marginTop: 10,
    textAlign: 'center',
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
    elevation: 5, // Sombra para el botón
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerText: {
    fontSize: 16,
    marginTop: 15,
    color: 'grey',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
    alignSelf: 'center',
  },
});
