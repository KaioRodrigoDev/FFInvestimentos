import { StatusBar } from 'expo-status-bar';

import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView,Image,TextInput,
   TouchableOpacity, Animated, Keyboard } from 'react-native';

import { Entypo, Feather, FontAwesome5} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home/Home.js';
import Sobre from './src/pages/Investimentos/Investimentos.js';
import Invest from './src/pages/Invest/Invest.js';
import Perfil from './src/pages/Perfil/Perfil.js';
import LostAccount from './src/pages/lostAccount/lostAcc'
import trocasenha from './src/pages/TrocaSenha/trocasenha'
import Cadastro from './src/pages/Cadastro/cadastro';
import selectpage from './src/pages/Seletpage/seletpage.js'
import users from './src/pages/Viewusers/viewusers.js'
import detalhes from './src/pages/Viewusers/users.js'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs(){
  
  return(
    <Tab.Navigator
    tabBarOptions={{
        style:{
            backgroundColor:'#121212',
            borderTopColor:'transparent',
        },
        activeTintColor:'#FFF',
        tabStyle:{
          paddingBottom:5,
          paddingTop:5,
        }

    }}>
            <Tab.Screen 
            name ="Investimentos"
            component={Sobre}
            options={{
              tabBarIcon:({size, color}) => (
                <Entypo name="bar-graph" size={size} color={color}/>
              )
            }}
           />
            

            <Tab.Screen 
             name ='Info. Bônus' 
             component={Invest} 
             options={{
              tabBarIcon:({size, color}) => (
                <FontAwesome5 name="donate" size={size} color={color}/>
              )
            }}
            />

            <Tab.Screen 
            name ='Conta' 
            component={Perfil} 
            options={{
              tabBarIcon:({size, color}) => (
                <Feather name="user" size={size} color={color}/>
              )
            }}
            
            
            
            />

        </Tab.Navigator>
  )
}


export default function App() {

  return (

    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
      name="Login" 
      options={{headerShown: false}} 
      component = {Home} 
      
      />
      <Stack.Screen 
      name="Sobre" 
      options={{
        headerShown: false,     //No Stack Screen eu estou criando um vinculo com o component
      }}
      component = {Tabs}     
      />

      <Stack.Screen 
      name="lostAccount" 
      options={{headerShown: false}} 
      component = {LostAccount} 
      
      />
    

    <Stack.Screen 
      name="senha" 
      options={{headerShown: false}} 
      component = {trocasenha} 
      
      />

      <Stack.Screen 
      name="perfil" 
      options={{headerShown: false}} 
      component = {Perfil} 
      
      />

      <Stack.Screen 
      name="cadastro" 
      options={{headerShown: false}} 
      component = {Cadastro} 
      
      />

      <Stack.Screen 
      name="selectpage" 
      options={{headerShown: false}} 
      component = {selectpage} 
      
      />


      <Stack.Screen 
      name="users" 
      options={{headerShown: false}} 
      component = {users} 
      
      />

      <Stack.Screen 
      name="detalhes" 
      options={{headerShown: false}} 
      component = {detalhes} 
      
      />

      
      
    </Stack.Navigator>
  </NavigationContainer>
  
  );
}


