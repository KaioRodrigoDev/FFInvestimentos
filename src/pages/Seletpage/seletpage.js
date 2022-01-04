import React from 'react'
import { StatusBar } from 'expo-status-bar'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native'
import { Entypo, Feather, FontAwesome } from '@expo/vector-icons'
import config from '../../../config/config.json'
const bgimage = '../../assets/imgs/gold01.jpg'
import ffinvest from '../../assets/imgs/ffimg.png'
import Globais from '../../../Globais'
import { useState } from 'react/cjs/react.development'

export default function Perfil({ navigation }) {
  async function sendForm() {
    //Envio do formulário de login
    let response = await fetch(`${config.urlRoot}read`, {
      method: 'GET'
    })
    let json = await response.json()
    console.log(json)
    Globais.dados = json
  }
  async function cadastro() {
    navigation.navigate('cadastro')
  }
  async function revisar() {
    navigation.navigate('users')
  }
  function login() {
    navigation.navigate('perfil')
  }
  sendForm()
  return (
    <ImageBackground source={require(bgimage)} style={styles.bgimage}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', backgroundColor: '#121212' }}>
          <Image source={ffinvest} style={styles.ffimg} />

          <Feather
            name="arrow-left"
            style={{
              width: '100%',
              right: '4.5%',
              textAlign: 'right',
              marginTop: '8.5%',
              position: 'absolute'
            }}
            size={26}
            color={'#FFF'}
            onPress={() => navigation.navigate('Sobre')}
          />
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={() => cadastro()}
            style={{
              alignSelf: 'center',
              backgroundColor: '#FFF',
              margin: 15,
              borderRadius: 10,
              width: '45%',
              height: '7%',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                color: '#202a44',
                fontSize: 15,
                fontFamily: 'monte-serrat'
              }}
            >
              Novo Cadastro
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => revisar()}
            style={{
              alignSelf: 'center',
              backgroundColor: '#FFF',
              margin: 15,
              borderRadius: 10,
              width: '45%',
              height: '7%',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Text
              style={{
                color: '#202a44',
                fontSize: 15,
                fontFamily: 'monte-serrat'
              }}
            >
              Revisar Clientes
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => login()}
          style={{
            alignSelf: 'center',
            backgroundColor: '#FFF',
            borderRadius: 10,
            width: '30%',
            height: '5%',
            marginBottom: 30,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text
            style={{
              color: '#202a44',
              fontSize: 15,
              fontFamily: 'monte-serrat'
            }}
          >
            Voltar
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <StatusBar style="light" />
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  ffimg: {
    marginLeft: 10,
    maxWidth: '8%',
    maxHeight: '8%',

    marginTop: '8.5%',
    marginBottom: 7,
    backgroundColor: '#121212',
    paddingTop: '9%',
    marginLeft: 10,
    height: Platform.OS === 'ios' ? 41 : 31,
    width: Platform.OS === 'ios' ? '46%' : '46%'
  },
  bgimage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  },
  title: {
    flex: 1,
    padding: 32,
    backgroundColor: '#12121290'
  },
  profille: {
    fontSize: 20,
    textAlign: 'center',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#E1E7E4'
  },
  profilleIcon: {
    padding: 45,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
