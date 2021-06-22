import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {View,Text,StyleSheet,ScrollView, ImageBackground,Image,KeyboardAvoidingView , TouchableOpacity,Alert} from 'react-native';
import { Entypo, Feather, FontAwesome } from '@expo/vector-icons';
import config from '../../../config/config.json'
const bgimage = '../../assets/gold01.jpg';
import ffinvest from '../../assets/ffimg.png'
import Globais from '../../../Globais'
import { useState } from 'react/cjs/react.development';
import goldlink from '../../assets/goldlink.jpg'

export default function Perfil({navigation}){

  var valor = 'Cliente'
    if (Globais.nome === 'Felipe'){
      valor = 'CEO'
    }

    function login(){
      navigation.navigate('Login')
    }
    return(
      <ImageBackground
      source={require(bgimage)}
      style={styles.bgimage}
      >
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

            <View style={{flexDirection:'row',backgroundColor:'#121212'}}>

          <Image
          source={ffinvest}
          style={styles.ffimg}
          />

          <Feather
            name='arrow-left'
            style={{width:'100%',
            right:'4.5%',
            textAlign:'right',
            marginTop:'8.5%',
            position:'absolute',}}
            size={26}
            color={'#FFF'}
            onPress={()=>navigation.navigate('Sobre')}
          />
          
          
            
          </View>
        <View style={styles.title}>
          <Text style={styles.profille}> PERFIL </Text>
          <View style={styles.profilleIcon}>
            <FontAwesome color='#E1E7E4' name='user-circle' size={70} />
            <Text style={{fontSize:25,color:'#E1E7E4',fontFamily: 'monte-serrat3'}}> {Globais.nome} </Text>
            <Text style={{fontSize:15,color:'#E1E7E4',fontFamily: 'monte-serrat3'}}>{valor}</Text>
          </View>
        
          
          <View style={{alignItems:'center',flex:1}}>
            <Text style={{color:'#E1E7E4',textAlign:'center',justifyContent:'center',fontFamily: 'monte-serrat'}}> {Globais.Email} </Text>
            

            
          </View>
          
          
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
    )

}
const styles = StyleSheet.create({
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
  bgimage:{
    flex:1,
    resizeMode:'cover',
    width:'100%',
    height:'100%'
  },
    title:{
      flex:1,
      padding:32,
      backgroundColor: '#12121290',
    },
    profille:{
      fontSize:20,
      textAlign:'center',
      padding:5,
      alignItems:'center',
      justifyContent:'center',
      color:'#E1E7E4',
      fontFamily: 'monte-serrat3'
    },
    profilleIcon:{
      padding:45,
      textAlign:'center',
      alignItems:'center',
      justifyContent:'center',
    }
  
  
  });