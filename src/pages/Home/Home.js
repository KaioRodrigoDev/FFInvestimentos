import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect, Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Animated,
  AsyncStorage,
  Keyboard,
  Linking,
  BackHandler,
  Alert,
  time
} from 'react-native'
import styles from '../../assets/layouts/styles'
import * as Animatable from 'react-native-animatable'
const bgimage = '../../assets/imgs/gold.png'
import config from '../../../config/config.json'
const acc = false
import Globais from '../../../Globais'
import {
  AntDesign,
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome5
} from '@expo/vector-icons'

export default function Home({ navigation }) {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }))
  const [opacity] = useState(new Animated.Value(0))
  const [logo] = useState(new Animated.ValueXY({ x: 130, y: 155 }))
  var [msg, setMsg] = useState('')
  const [display, setDisplay] = useState('none')
  const [user, setUser] = useState(null)
  const [password, setPassword] = useState(null)
  const [login, setLogin] = useState(null)
  var usuario = useState(null)

  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow
    )
    keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide
    )

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      })
    ]).start()
  }, [])

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 55,
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(logo.y, {
        toValue: 65,
        duration: 100,
        useNativeDriver: false
      })
    ]).start()
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 130,
        duration: 300,
        useNativeDriver: false
      }),
      Animated.timing(logo.y, {
        toValue: 155,
        duration: 300,
        useNativeDriver: false
      })
    ]).start()
  }

  function inst() {
    Linking.openURL('https://www.instagram.com/felipesilvaa.ff/')
  }

  function whats() {
    Linking.openURL('https://api.whatsapp.com/send?phone=5583991020302')
  }

  async function sendForm() {
    //Envio do formulário de login

    Alert.alert('Olá!', 'Estamos carregando os dados do seu contrato.')

    let response = await fetch(`${config.urlRoot}login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: user,
        password: password
      })
    })
    let json = await response.json()

    if (json == 'error') {
      console.log('login incorreto')
      console.log(json)
      setMsg('Login ou Senha Incorretas')
      setTimeout(() => {
        setMsg('')
      }, 30000)
    } else {
      console.log(json)
      await AsyncStorage.setItem('userData', JSON.stringify(json))
      let resData = await AsyncStorage.getItem('userData')
      navigation.navigate('Sobre')
      console.log(json.response2)
      Globais.nick = json.response.name
      Globais.nome = json.response.name
      Globais.ativo = json.response2.ativo
      Globais.valorInvestido = json.response2.valorInvestido
      Globais.contrato = json.response2.contrato
      Globais.dataInicio = json.response2.dataInicio
      Globais.dataFim = json.response2.dataFim
      Globais.bonusM = json.response2.bonusM
      Globais.bonusP = json.response2.bonusP
      Globais.Email = json.response2.Email
      Globais.cpf = json.response2.cpf
      Globais.userId = json.response.id
      Globais.num = json.response2.num
      const now = new Date() // Data de hoje
      const past = new Date(Globais.dataFim) // Outra data no passado
      const diff = Math.abs(past.getTime() - now.getTime()) // Subtrai uma data pela outra
      const days = Math.ceil(diff / (1000 * 60 * 60 * 24 * 30) - 1) // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).
      const past2 = new Date(Globais.dataInicio)
      const diff2 = Math.abs(past2.getTime() - now.getTime())
      const rest = Math.ceil(diff2 / (1000 * 60 * 60 * 24 * 30))
      Globais.bonusM = Globais.valorInvestido * (Globais.bonusP / 100)
      Globais.bonusT = Globais.bonusM * rest
      function numberToReal(numero) {
        var numero = numero.toFixed(2).split('.')
        numero[0] = numero[0].split(/(?=(?:...)*$)/).join('.')
        return numero.join(',')
      }
      Globais.maskedbonusM = numberToReal(Globais.bonusM)
      Globais.maskedvalorInvestido = numberToReal(Globais.valorInvestido) ///ISSO ESTA SENDO SO UMA CONVERSAO PARA MOEDA
      Globais.maskedbonusT = numberToReal(Globais.bonusT)
      Globais.bonusI = json.response2.bonusI
    }
  }

  return (
    <ImageBackground source={require(bgimage)} style={styles.bgimage}>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        style={styles.background}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.containerLogo}>
          <Animated.Image
            style={{
              width: logo.x,
              height: logo.y
            }}
            source={require('../../assets/imgs/Prancheta6.png')}
          />
        </View>

        <Animated.View
          useNativeDriver
          style={[
            styles.container,
            {
              opacity: opacity,
              transform: [{ translateY: offset.y }]
            }
          ]}
        >
          <Text style={{ color: '#FFF' }}>{msg}</Text>
          <TextInput
            style={styles.input}
            placeholder="Usuário"
            autoCorrect={false}
            onChangeText={text => setUser(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
            autoCorrect={false}
            onChangeText={text => setPassword(text)}
          />

          <TouchableOpacity style={styles.btnSubmit} onPress={() => sendForm()}>
            <Text style={styles.SubmitText}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnRegister}
            onPress={() => navigation.navigate('lostAccount')}
          >
            <Text style={{ color: '#FFF' }}>Esqueceu a senha?</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', paddingTop: 10 }}>
            <TouchableOpacity onPress={() => whats()}>
              <FontAwesome size={30} color={'#FFF'} name={'whatsapp'} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{ paddingLeft: 10 }}
              onPress={() => inst()}
            >
              <AntDesign size={30} color={'#FFF'} name={'instagram'} />
            </TouchableOpacity>
          </View>

          <Text style={{ color: '#DDD', top: '57%', fontSize: 10 }}>
            © 2021 FFinvestimentos
          </Text>
        </Animated.View>
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}
