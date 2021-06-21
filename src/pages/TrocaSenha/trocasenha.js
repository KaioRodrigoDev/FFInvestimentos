import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { StatusBar } from 'expo-status-bar';
import {View,Text,StyleSheet, ImageBackground,Image, TouchableOpacity, TextInput, Alert} from 'react-native';
import { Entypo, Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import config from '../../../config/config.json'

const bgimage = '../../assets/gold01.jpg';
import ffinvest from '../../assets/ffimg.png'
import { useState } from 'react';
import { useEffect } from 'react';
import Globais from '../../../Globais';

export default function trocasenha({navigation}){

  
    const [idUser, setIdUser] = useState(null);
    const [senhaAntiga, setSenhaAntiga] = useState(null);
    const [novaSenha, setNovaSenha] = useState(null);
    const [confNovaSenha, setConfNovaSenha] = useState(null);
    const [msg, setMsg] = useState(null);

    useEffect(()=>{
        async function getIdUser()
        {
            let response=await AsyncStorage.getItem('userData');
            let json=JSON.parse(response);
            setIdUser(json.id);
        }
        getIdUser();
     });

     async function sendForm()
     {
         let response=await fetch(`${config.urlRoot}verifyPass`,{ //ENVIANDO FORMULARIO
             method:'POST',
             body:JSON.stringify({
                 id: Globais.userId,
                 senhaAntiga: senhaAntiga,
                 novaSenha: novaSenha,
                 confNovaSenha: confNovaSenha
             }),
             headers:{
                 Accept: 'application/json',
                 'Content-Type': 'application/json'
             }
         });
         let json=await response.json();
         console.log(json);
         if (json==='Senha atualizada com sucesso!'){
          Alert.alert("Sucesso!", "Senha alterada com sucesso");
          navigation.navigate('Sobre')
         }
         else{
          Alert.alert("Erro", "Verifique a senha");
          
         }
     }
 

    function login(){

      navigation.navigate('Sobre')

    }
    return(
      
      <ImageBackground
      source={require(bgimage)}
      style={styles.bgimage}
      >
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
            onPress={()=>login()}
          />
          
          
            
          </View>
        <View style={styles.title}>
          <Text style={styles.profille}> TROCAR SENHA </Text>
          <View>
            <Text style={{color:'#FFF', alignSelf:'center'}}>{msg}</Text>
          <TextInput
          placeholder={'Senha atual'}
          style={styles.input}
          onChangeText={text=>setSenhaAntiga(text)}
          />

        <TextInput
          placeholder={'Nova senha'}
          style={styles.input}
          onChangeText={text=>setNovaSenha(text)}
          />
        
        <TextInput
          placeholder={'Confirmar senha'}
          style={styles.input}
          onChangeText={text=>setConfNovaSenha(text)}
          />
        </View>
          <TouchableOpacity
          onPress={()=>sendForm()}
          style={{backgroundColor:'#048BF1',padding:7,borderRadius:10,marginTop:10}}
          >
              <Text style={{alignSelf:'center',color:'#DDD'}}>Trocar senha</Text>
          </TouchableOpacity>
         
          

          

        </View>
        
        <StatusBar style="auto" />
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
      color:'#E1E7E4'
    },
    profilleIcon:{
      padding:45,
      textAlign:'center',
      alignItems:'center',
      justifyContent:'center',
    },
    input:{
        margin:5,
        padding:10,
        borderRadius:10,
        backgroundColor:'#FFF',
        
    }
  
  
  });