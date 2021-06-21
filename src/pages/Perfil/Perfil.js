import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {View,Text,StyleSheet, ImageBackground,Image,KeyboardAvoidingView , TouchableOpacity,Alert} from 'react-native';
import { Entypo, Feather, FontAwesome } from '@expo/vector-icons';
import config from '../../../config/config.json'
const bgimage = '../../assets/gold01.jpg';
import ffinvest from '../../assets/ffimg.png'
import Globais from '../../../Globais'
import { useState } from 'react/cjs/react.development';


export default function Perfil({navigation}){

  var valor = 'Cliente'
    if (Globais.nome === 'Felipe'){
      valor = 'CEO'
    }
    async function cadastro(){
      if (Globais.cpf == '153') {
        navigation.navigate('selectpage')
        
      }
      else{
        
    Alert.alert("Área Restrita", "Esta é uma área restrita, permitida apenas para administradores!");
      }
      
    }
    function login(){
      navigation.navigate('Login')
    }
    return(
      <ImageBackground
      source={require(bgimage)}
      style={styles.bgimage}
      >
        <KeyboardAvoidingView
        style={{flex:1}}
        >
        <View style={{flexDirection:'row',backgroundColor:'#121212'}}>

          <Image
          source={ffinvest}
          style={styles.ffimg}
          />

          <TouchableOpacity
          size={26}
          color={'#FFF'}
          onPress={()=>navigation.navigate('Login')}
            style={{
            right:'4.5%',
            marginTop:'7.5%',
            textAlign:'right',
            position:'absolute',
            justifyContent:'center',
            
          }}
            
          >
            <Text style={{color:'#FFF'}}>Sair</Text>
          </TouchableOpacity>
          
          
            
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
            

            <TouchableOpacity
            onPress={ ()=> navigation.navigate('senha')}
            >
              <Text style={{color:'#FFF',fontSize:15,fontFamily: 'monte-serrat2'}}>Alterar senha</Text>
            </TouchableOpacity>


            


          </View>
          
          

          
          
          

          
          <TouchableOpacity
            onPress={ () =>cadastro()}
            style={{alignSelf:'center',backgroundColor:'#048BF1',borderRadius:10,width:'50%',height:'8%',alignItems:'center',justifyContent:'center'}}
            >
              <Text style={{color:'#DDD',fontSize:15,fontFamily: 'monte-serrat'}}>Gerenciar contas</Text>
            </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
        
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