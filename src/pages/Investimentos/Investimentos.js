import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState,useEffect, Component } from 'react';
import { StyleSheet, Text, View,ScrollView, Image, TouchableOpacity, Linking, BackHandler,Alert ,ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import bitcoin from '../../assets/bitcoin.jpg'
import { Entypo, Feather } from '@expo/vector-icons';
import * as Font from 'expo-font';

const getFonts = Font.loadAsync({
'monte-serrat':require('../../assets/fonts/Montserrat-Medium.ttf'),
'monte-serrat2':require('../../assets/fonts/Montserrat-SemiBold.ttf'),
'monte-serrat3':require('../../assets/fonts/Montserrat-Regular.ttf')
});
//item para sair user-minus feather
const bgimage = '../../assets/gold01.jpg';
import ffinvest from '../../assets/ffimg.png'
import goldlink from '../../assets/goldlink.jpg'
import config from '../../../config/config.json'
import Globais from '../../../Globais'




export default function Sobre ({navigation})  {
  function login(){
    navigation.navigate('Login')
  }

const address=''
const [dinheiro,setDinheiro] = useState(null);
const [user,setUser] = useState(null);
const [contrato,setContrato] = useState(null);
const [response,setResponse] = useState(null);








  useEffect(()=>{
    getUser();
  },[]);
//Pegar id do usuario
  async function getUser(){
    let response=await AsyncStorage.getItem('userData')
    let json=JSON.parse(response);
    setUser(json.id)
  }

  function ourin(){
    
    
    Linking.openURL('https://br.tradingview.com/chart/?symbol=XAUUSD')
  }
  
  function onSend(){
    console.log(this.state.texto);
  }

  useEffect(() => {
    const backAction = () => {
        Alert.alert("Alerta!", "Deseja mesmo sair do app?", [
            {
                text: "Não",
                onPress: () => null,
                style: "cancel"
            },
            { text: "Sim", onPress: () => {
                navigation.navigate('Login');
                }
            }
        ]);
        return true;
    };

    const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
    );

    return () => backHandler.remove();
}, []);




  const [open, setOpen]  = useState(false)
  return (
    
    <ImageBackground
      source={require(bgimage)}
      style={styles.bgimage}
      >
      <View style={{backgroundColor:'#121212'}}>

      <Image
        source={ffinvest}
        style={styles.ffimg}
        />
          
      </View>
      <ScrollView 
      showsVerticalScrollIndicator={false}
      >
      <View style={styles.hellowView}>
        <Text style={styles.hello}>Olá, {Globais.nick}</Text>
        
        <Text style={styles.hello}>Que bom te receber de volta!  ; )</Text>
      </View>

      <Text style={{color:'#ffd730',marginTop:'7%',textAlign:'center',fontSize:20,fontFamily: 'monte-serrat'}}>CONTA PRINCIPAL</Text>
      <View style={styles.investimento} >
        
        <Text style={{color:'#ffd730',bottom:5,fontSize:15,textAlign:'center',fontFamily: 'monte-serrat2'}}>MEU INVESTIMENTO</Text>  
          <View style={{
            backgroundColor:'#12121299',
              flexDirection:'row',
              justifyContent:'center',
              marginTop:10,
              borderRadius:10,
              borderColor:'#F19E04',
              bottom:'2%'}}>
              
            <Text style={{color:'#FFF',top:7,textAlign:'center',}}>R$</Text>
            <Text style={{color:'#ffd730',fontSize:23,padding:5,fontFamily: 'monte-serrat2'}}> {Globais.maskedvalorInvestido}</Text>
          </View>

         <Text style={{color:'#FFF',bottom:5,fontSize:13,textAlign:'center',paddingTop:10,fontFamily: 'monte-serrat2'}}>RENDIMENTO MENSAL</Text>
         <View style={styles.invest}>
            <Text style={{color:'#FFF',top:7,textAlign:'center'}}>R$</Text>
           <Text style={{color:'#FFF',fontSize:23,padding:5,fontFamily: 'monte-serrat2'}}> {Globais.maskedbonusM} </Text>
         </View>



            <Text style={{color:'#FFF',fontSize:13,padding:5,textAlign:'center',fontFamily: 'monte-serrat2'}}> MINHA REDE </Text>
         <View style={styles.invest}>
            
            <Text style={{color:'#FFF',fontSize:23,padding:5,fontFamily: 'monte-serrat2'}}> {Globais.bonusI} </Text>
            <Text style={{color:'#FFF',top:7}}>Pessoa(s)</Text>

         </View>



         <View style={styles.goldView}>
           <Text style={{color:'#FFF',fontSize:15,fontFamily: 'monte-serrat2'}}> Acompanhe o Mercado em Ouro </Text>
           <TouchableOpacity
           onPress={()=>ourin()}
           >
           <Image
           source={goldlink}
           style={styles.goldimg}
            />

            </TouchableOpacity>
           <TouchableOpacity
           onPress={()=>ourin()} 
           >
            <Text style={{color:'#FFF', textAlign:'center',justifyContent:'center'}}>XAUUSD - Gráfico e Preço do Ouro</Text>
            <Text style={{color:'#FFF', textAlign:'center',justifyContent:'center'}}>TradingView</Text>
            
            </TouchableOpacity>
           
         </View>
         
      </View>
      </ScrollView>
      <StatusBar style="light" />
    </ImageBackground>

  );
}

const styles = StyleSheet.create({
  bgimage:{
    flex:1,
    resizeMode:'cover',
    width:'100%',
    height:'100%'
  },
  ffimg:{
    marginLeft:10,
    maxWidth:'8%',
    maxHeight:'8%',
    
    marginTop:'8.5%',
    marginBottom:7,
    backgroundColor:'#121212',
    paddingTop:'9%',
    marginLeft:10,
    height:Platform.OS === "ios" ? 41 : 31,
    width:Platform.OS === "ios" ? '46%' : '46.0%',
  },
  hellowView:{
    marginTop:'13%',
    marginLeft:'5%'

  },
  hello:{
    fontSize:15,
    fontFamily: 'monte-serrat3',
    color:'#FFF',
  },
  investimento:{
    paddingTop:'7%',
    paddingBottom:'15%',
    backgroundColor: '#12121299',
    margin:30,
    marginTop:'10%',
    borderRadius:20,
    justifyContent:'center',
    
  },
  invest:{
  backgroundColor:'#12121299',
  flexDirection:'row',
  justifyContent:'center',
  textAlign:'center',
  marginTop:10,
  borderRadius:10,
  borderColor:'#047BF1',
  bottom:'2%'
  },
  goldimg:{
    width:250,
    height:125,
    borderRadius:10,
    marginTop:'4%'
  },
  goldView:{
    marginTop:'7%',
    alignItems:'center'
  }
});