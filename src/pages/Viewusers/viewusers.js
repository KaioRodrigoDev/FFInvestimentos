import React, {useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {View,Alert,Text,StyleSheet, ImageBackground,Image,KeyboardAvoidingView , TouchableOpacity,FlatList} from 'react-native';
import { Entypo, Feather, FontAwesome,EvilIcons, FontAwesome5 } from '@expo/vector-icons';
import config from '../../../config/config.json'
const bgimage = '../../assets/gold01.jpg';
import ffinvest from '../../assets/ffimg.png'
import Globais from '../../../Globais'
import { useState } from 'react/cjs/react.development';


export default function Perfil({navigation}){

  async function sendForm(id){
      
    
      //Envio do formulário de login
          let response=await fetch(`${config.urlRoot}deletacc`,{
              method: 'POST',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  id: id,
                  
              })
          });
          let json=await response.json();
          console.log(json)
          Alert.alert("Feito!", "Conta EXCLUÍDA com sucesso!");
          navigation.navigate('Sobre')
          
  
  


  }

  async function sendForm2(id){
      
    
    //Envio do formulário de login
        let response=await fetch(`${config.urlRoot}addind`,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                
            })
        });
        let json=await response.json();
        console.log(json)
        Alert.alert("Feito!", "Adicionado bônus com sucesso");
        navigation.navigate('Sobre')
        




}

async function sendForm3(id){
      
    
  //Envio do formulário de login
      let response=await fetch(`${config.urlRoot}removeind`,{
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              id: id,
              
          })
      });
      let json=await response.json();
      console.log(json)
      Alert.alert("Feito!", "Removido bônus com sucesso");
      navigation.navigate('Sobre')
      




}
    async function cadastro(){
      
    navigation.navigate('cadastro')
      
      
    } 



    function login(){
      const now = new Date(); // Data de hoje
        const past = new Date(Globais.dataInicio); // Outra data no passado
        const diff = Math.abs(  past.getTime()- now.getTime()); // Subtrai uma data pela outra
        const days = Math.ceil(diff / (1000 * 60 * 60 * 24 * 30 )); //
        console.log(days)
    }

    function Users({ nome , cpf, id}){
      return(
        <View style={styles.item}>
          <View style={{flex:1}}>
            <Text style={{color:'#FFF',fontSize:20,fontFamily:'monte-serrat'}}>{nome} </Text>
            <Text style={{color:'#FFF',fontSize:16,fontFamily:'monte-serrat'}}>CPF: {cpf}</Text>
          </View>
          
          <View style={{justifyContent:'center',flexDirection:'row'}}>
          <TouchableOpacity 
          onPress={()=> sendForm3(id)}
          style={{justifyContent:'center',paddingRight:10}}>
              <Feather
              name={'user-minus'}
              size={30}
              color={'#FFF'}
              />
            </TouchableOpacity>


            <TouchableOpacity 
          onPress={()=>sendForm2(id)}
          style={{justifyContent:'center',paddingRight:10}}>
              <Feather
              name={'user-plus'}
              size={30}
              color={'#FFF'}
              />
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>sendForm(id)}
            style={{justifyContent:'center'}}>
            <FontAwesome
              name={'remove'}
              size={30}
              color={'#FFF'}
              />
            </TouchableOpacity>
          </View>
        </View>
      )
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

            <Feather
            name='arrow-left'
            style={{width:'100%',
            right:10,
            textAlign:'right',
            marginTop:'8.5%',
            position:'absolute',}}
            size={26}
            color={'#FFF'}
            onPress={()=>navigation.navigate('Sobre')}
          />
          


        </View> 
<View style={{flex:1,justifyContent:'center'}}> 

<FlatList
        data={Globais.dados}
        keyExtractor={(item) => (item.id.toString())}
        renderItem={({item}) => <Users nome={item.name} cpf={item.cpf} id={item.id} />}
      />



</View>
        
        </KeyboardAvoidingView>
        
        <StatusBar style="light" />
      </ImageBackground>
    )
//Conteudo logo acima
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
    width:Platform.OS === "ios" ? '46%' : '46%',
  },
  bgimage:{
    flex:1,
    resizeMode:'cover',
    width:'100%',
    height:'100%'
  },
  item:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'#12121290',
    fontSize:15,
    padding:20,
    borderBottomWidth:1,
    borderBottomColor: '#ccc'

  }
  
  
  });