import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {View,Text,StyleSheet,Image,ImageBackground} from 'react-native';
import { useState } from 'react/cjs/react.development';
import TaskList from '../../components/index'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Globais from '../../../Globais'
import { TextInputMask } from 'react-native-masked-text'
const bgimage = '../../assets/imgs/gold01.jpg';
import ffinvest from '../../assets/imgs/ffimg.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo, Feather } from '@expo/vector-icons';


function formatDate(str)
{
    return str.split('-').reverse().join('-');
}




  
//ISSO AQUI SAO INFO BONUS


export default function Invest({navigation}){
  

  
  
  function login(){
    navigation.navigate('Login')
  }
    
           


    return(
      
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

        <View style={{alignItems:'center'}}>
          <Text style={{color:'#ffd730',marginTop:'10%',fontSize:20,fontFamily: 'monte-serrat2',}}>INFORMAÇÕES</Text>
          
        </View>
        
          <View style={styles.inf}>
          
            
            <View style={styles.infoBonus}>
              <Text style={{color:'#048BF1',fontSize:13,fontFamily: 'monte-serrat3'}}>Cliente: </Text>
              <Text style={{color:'#FFF',fontSize:13,left:'100%',fontFamily: 'monte-serrat2'}}>{Globais.nick}</Text>
            </View>

            <View style={styles.infoBonus}>
              <Text style={{color:'#048BF1',fontSize:13,fontFamily: 'monte-serrat3'}}>Ativo: </Text>
              <Text style={{color:'#FFF',fontSize:13,left:'100%',fontFamily: 'monte-serrat2'}}>{Globais.ativo}</Text>
            </View>

            <View style={styles.infoBonus}> 
              <Text style={{color:'#048BF1',fontSize:13,fontFamily: 'monte-serrat3'}}>Ganho (em %): </Text>
              <Text style={{color:'#FFF',fontSize:13,left:'100%',fontFamily: 'monte-serrat2'}}>{Globais.bonusP}% ao mês</Text>
            </View>

            <View style={styles.infoBonus}>
              <Text style={{color:'#048BF1',fontSize:13,fontFamily: 'monte-serrat3'}}>Valor investido: </Text>
              <Text style={{color:'#FFF',fontSize:13,left:'100%',fontFamily: 'monte-serrat2'}}>R$ {Globais.maskedvalorInvestido}</Text>
            </View>

            <View style={styles.infoBonus}>
              <Text style={{color:'#048BF1',fontSize:13,fontFamily: 'monte-serrat3'}}>Bônus mensal: </Text>
              <Text style={{color:'#FFF',fontSize:13 ,left:'100%',fontFamily: 'monte-serrat2'}}>R$ {Globais.maskedbonusM}</Text>
            </View>

            <View style={styles.infoBonus}>
              <Text style={{color:'#048BF1',fontSize:13,fontFamily: 'monte-serrat3'}}>Indicações: </Text>
              <Text style={{color:'#FFF',fontSize:13 ,left:'100%',fontFamily: 'monte-serrat2'}}>{Globais.bonusI}</Text>
            </View>

            <View style={styles.infoBonus}>
              <Text style={{color:'#048BF1',fontSize:13,fontFamily: 'monte-serrat3'}}>Contrato: </Text>
              <Text style={{color:'#FFF',fontSize:13,left:'100%',fontFamily: 'monte-serrat2'}}>{Globais.contrato} Meses</Text>
            </View>

            <View style={styles.infoBonus}>
              <Text style={{color:'#048BF1',fontSize:13,fontFamily: 'monte-serrat3'}}>Data início: </Text>
              <Text style={{color:'#FFF',fontSize:13,left:'100%',fontFamily: 'monte-serrat2'}}>{formatDate(Globais.dataInicio)}</Text>
            </View>

            <View style={styles.infoBonus}>
              <Text style={{color:'#048BF1',fontSize:13,fontFamily: 'monte-serrat3'}}>Data fim: </Text>
              <Text style={{color:'#FFF',fontSize:13,left:'100%',fontFamily: 'monte-serrat2'}}>{formatDate(Globais.dataFim)}</Text>
            </View>
        
          </View>
      
          <StatusBar style="light" />
      </ImageBackground>
    )

}
const styles = StyleSheet.create({
  bgimage:{
    flex:1,
    resizeMode:'cover',
    width:'100%',
    height:'100%'
  },
    title:{
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
      height:Platform.OS === "ios" ? 41 : 25,
      width:Platform.OS === "ios" ? '46%' : '40.0%',
    },
    inf:{
      height:'50%',
      borderRadius:15,
      margin:30,
      marginTop:'15%',
      justifyContent:'center',
    },
    infoBonus:{
      alignItems:'center',
      backgroundColor:'#12121290',
      flex:1,
      flexDirection:'row',
      borderWidth:0.3,
      borderColor:'#048BF1',
      borderRadius:15,
      padding:15,
      paddingLeft:20,
    }
  
  
  });