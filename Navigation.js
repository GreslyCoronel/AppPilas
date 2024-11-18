import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/Login';
import Registro from './src/Registro';
import HomeScreen from './src/HomeScreen';
import Encuesta from './src/Encuesta';
import Ubicacion from './src/Ubicacion';
import RegistroPila from './src/RegistroPila';
//import QrScanner from './src/QrScanner';
//import Encuesta from './src/components/Encuesta';

// iconos
import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    

    <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
            tabBarActiveTintColor: 'purple',
        }}
    >
    
      <Tab.Screen 
      name="Home" 
      component={HomeScreen}  
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ size, color }) => (
          <Octicons name="home" size={30}  />

        ),
        //headerShown: false,
      }}
      />
      <Tab.Screen name="Registro"
       component={RegistroPila} 
       options={{
            tabBarLabel: '',
            tabBarIcon: ({ size, color }) => (
            <FontAwesome6 name="qrcode" size={30}  />
          ),
        }}
      />

      <Tab.Screen name="Graficos"
       component={Encuesta} 
       options={{
            tabBarLabel: '',
            tabBarIcon: ({ size, color }) => (
            <AntDesign name="linechart" size={30}  />
          ),
        }}
      />

      <Tab.Screen name="Ubicacion"
        component={Ubicacion} 
        options={{
            tabBarLabel: '',
            tabBarIcon: ({ size, color }) => (
              <Entypo name="location-pin" size={30} color="" />
         ),
       }}
      />

      <Tab.Screen name="Encuesta"
        component={Encuesta} 
        options={{
            tabBarLabel: '',
            tabBarIcon: ({ size, color }) => (
              <Entypo name="new-message" size={30} color="" />
         ),
       }}
      />

    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Main" 
          component={MyTabs} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



