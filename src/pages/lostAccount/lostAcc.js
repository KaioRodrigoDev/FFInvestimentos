import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Animated,
  Keyboard
} from 'react-native'
import * as Animatable from 'react-native-animatable'

const bgimage = '../../assets/imgs/gold01.jpg'
import config from '../../../config/config.json'
export default function Home(props) {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }))
  const [opacity] = useState(new Animated.Value(0))
  const [logo] = useState(new Animated.ValueXY({ x: 130, y: 155 }))
  const [cpf, setCpf] = useState(null)
  const [nome, setNome] = useState(null)
  const [novaSenha, setNovasenha] = useState(null)

  async function sendForm() {
    let response = await fetch(`${config.urlRoot}lostacc`, {
      //ENVIANDO FORMULARIO
      method: 'POST',
      body: JSON.stringify({
        name: nome,
        novaSenha: novaSenha,
        cpf: cpf
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    let json = await response.json()
    console.log(json)
  }
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
        duration: 100,
        useNativeDriver: false
      }),
      Animated.timing(logo.y, {
        toValue: 155,
        duration: 100,
        useNativeDriver: false
      })
    ]).start()
  }

  console.log(props)
  return (
    <ImageBackground source={require(bgimage)} style={styles.bgimage}>
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
            source={require('../../assets/imgs/unnamed.png')}
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
          <TextInput
            style={styles.input}
            placeholder="Nome e Sobrenome"
            autoCorrect={false}
            onChangeText={text => setNome(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="CPF"
            autoCorrect={false}
            onChangeText={text => setCpf(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Nova senha"
            autoCorrect={false}
            onChangeText={text => setNovasenha(text)}
          />

          <TouchableOpacity style={styles.btnSubmit} onPress={() => sendForm()}>
            <Text style={styles.SubmitText}>Recuperar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnRegister}
            onPress={() => props.navigation.navigate('Login')}
          >
            <Text style={styles.registerText}>Voltar ao Login</Text>
          </TouchableOpacity>
        </Animated.View>

        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    width: '90%',
    paddingBottom: 50
  },
  input: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10
  },
  btnSubmit: {
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },
  SubmitText: {
    color: '#FFF',
    fontSize: 18
  },
  btnRegister: {
    marginTop: 10
  },
  registerText: {
    color: '#121212'
  },
  bgimage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  }
})
