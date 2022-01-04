import React from 'react'
import { StatusBar } from 'expo-status-bar'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert
} from 'react-native'
import { Entypo, Feather, FontAwesome } from '@expo/vector-icons'
import config from '../../../config/config.json'
const bgimage = '../../assets/imgs/gold01.jpg'
import ffinvest from '../../assets/imgs/ffimg.png'
import Globais from '../../../Globais'
import { useState } from 'react/cjs/react.development'
import goldlink from '../../assets/imgs/goldlink.jpg'

export default function Perfil({ navigation }) {
  var valor = 'Cliente'
  function formatDate(str) {
    return str.split('-').reverse().join('-')
  }
  function login() {
    navigation.navigate('Login')
  }

  return (
    <ImageBackground source={require(bgimage)} style={styles.bgimage}>
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
          onPress={() => navigation.navigate('users')}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.title}>
          <Text style={styles.profille}> DADOS DO CLIENTE </Text>
          <View style={styles.profilleIcon}>
            <FontAwesome color="#E1E7E4" name="user-circle" size={70} />
            <Text
              style={{
                fontSize: 25,
                color: '#E1E7E4',
                fontFamily: 'monte-serrat3'
              }}
            >
              {' '}
              {Globais.detalhes.nome}{' '}
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: '#E1E7E4',
                fontFamily: 'monte-serrat3'
              }}
            >
              {valor}
            </Text>
          </View>

          <View style={styles.inf}>
            <View style={styles.infoBonus}>
              <Text
                style={{
                  color: '#048BF1',
                  fontSize: 13,
                  fontFamily: 'monte-serrat3'
                }}
              >
                Cliente:{' '}
              </Text>
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 13,
                  left: '100%',
                  fontFamily: 'monte-serrat2'
                }}
              >
                {Globais.detalhes.nome}
              </Text>
            </View>

            <View style={styles.infoBonus}>
              <Text
                style={{
                  color: '#048BF1',
                  fontSize: 13,
                  fontFamily: 'monte-serrat3'
                }}
              >
                CPF:{' '}
              </Text>
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 13,
                  left: '100%',
                  fontFamily: 'monte-serrat2'
                }}
              >
                {Globais.detalhes.cpf}
              </Text>
            </View>

            <View style={styles.infoBonus}>
              <Text
                style={{
                  color: '#048BF1',
                  fontSize: 13,
                  fontFamily: 'monte-serrat3'
                }}
              >
                Email:{' '}
              </Text>
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 13,
                  left: '100%',
                  fontFamily: 'monte-serrat2'
                }}
              >
                {Globais.detalhes.Email}
              </Text>
            </View>

            <View style={styles.infoBonus}>
              <Text
                style={{
                  color: '#048BF1',
                  fontSize: 13,
                  fontFamily: 'monte-serrat3'
                }}
              >
                Whatsapp:{' '}
              </Text>
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 13,
                  left: '100%',
                  fontFamily: 'monte-serrat2'
                }}
              >
                {Globais.detalhes.num}
              </Text>
            </View>

            <View style={styles.infoBonus}>
              <Text
                style={{
                  color: '#048BF1',
                  fontSize: 13,
                  fontFamily: 'monte-serrat3'
                }}
              >
                Ativo:{' '}
              </Text>
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 13,
                  left: '100%',
                  fontFamily: 'monte-serrat2'
                }}
              >
                {Globais.detalhes.ativo}
              </Text>
            </View>

            <View style={styles.infoBonus}>
              <Text
                style={{
                  color: '#048BF1',
                  fontSize: 13,
                  fontFamily: 'monte-serrat3'
                }}
              >
                Ganho (em %):{' '}
              </Text>
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 13,
                  left: '100%',
                  fontFamily: 'monte-serrat2'
                }}
              >
                {Globais.detalhes.bonusP}% ao mês
              </Text>
            </View>

            <View style={styles.infoBonus}>
              <Text
                style={{
                  color: '#048BF1',
                  fontSize: 13,
                  fontFamily: 'monte-serrat3'
                }}
              >
                Valor investido:{' '}
              </Text>
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 13,
                  left: '100%',
                  fontFamily: 'monte-serrat2'
                }}
              >
                R$ {Globais.detalhes.valorInvestido}
              </Text>
            </View>

            <View style={styles.infoBonus}>
              <Text
                style={{
                  color: '#048BF1',
                  fontSize: 13,
                  fontFamily: 'monte-serrat3'
                }}
              >
                Bônus mensal:{' '}
              </Text>
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 13,
                  left: '100%',
                  fontFamily: 'monte-serrat2'
                }}
              >
                R$ {Globais.detalhes.bonusM}
              </Text>
            </View>

            <View style={styles.infoBonus}>
              <Text
                style={{
                  color: '#048BF1',
                  fontSize: 13,
                  fontFamily: 'monte-serrat3'
                }}
              >
                Indicações:{' '}
              </Text>
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 13,
                  left: '100%',
                  fontFamily: 'monte-serrat2'
                }}
              >
                {Globais.detalhes.bonusI}
              </Text>
            </View>

            <View style={styles.infoBonus}>
              <Text
                style={{
                  color: '#048BF1',
                  fontSize: 13,
                  fontFamily: 'monte-serrat3'
                }}
              >
                Contrato:{' '}
              </Text>
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 13,
                  left: '100%',
                  fontFamily: 'monte-serrat2'
                }}
              >
                {Globais.detalhes.contrato} Meses
              </Text>
            </View>

            <View style={styles.infoBonus}>
              <Text
                style={{
                  color: '#048BF1',
                  fontSize: 13,
                  fontFamily: 'monte-serrat3'
                }}
              >
                Data início:{' '}
              </Text>
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 13,
                  left: '100%',
                  fontFamily: 'monte-serrat2'
                }}
              >
                {formatDate(Globais.detalhes.dataInicio)}
              </Text>
            </View>

            <View style={styles.infoBonus}>
              <Text
                style={{
                  color: '#048BF1',
                  fontSize: 13,
                  fontFamily: 'monte-serrat3'
                }}
              >
                Data fim:{' '}
              </Text>
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 13,
                  left: '100%',
                  fontFamily: 'monte-serrat2'
                }}
              >
                {formatDate(Globais.detalhes.dataFim)}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
    width: Platform.OS === 'ios' ? '46%' : '46.0%'
  },
  bgimage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%'
  },
  title: {
    flex: 1,
    backgroundColor: '#12121290'
  },
  profille: {
    fontSize: 20,
    textAlign: 'center',
    padding: 5,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#E1E7E4',
    fontFamily: 'monte-serrat3'
  },
  profilleIcon: {
    padding: 20,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inf: {
    height: '50%',
    borderRadius: 25,
    margin: 10,
    marginTop: '15%',
    justifyContent: 'center'
  },
  infoBonus: {
    alignItems: 'center',
    backgroundColor: '#12121290',
    flex: 1,
    flexDirection: 'row',
    borderWidth: 0.3,
    borderColor: '#048BF1',
    borderRadius: 25,
    padding: 15,
    paddingLeft: 20
  }
})
