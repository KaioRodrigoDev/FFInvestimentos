import React, {useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {View,Text,StyleSheet, ImageBackground,Image, TouchableOpacity, ScrollView,Alert, TextInput, KeyboardAvoidingView} from 'react-native';
import { Entypo, Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import config from '../../../config/config.json';
import { StatusBar } from 'expo-status-bar';
const bgimage = '../../assets/background.jpg';
import ffinvest from '../../assets/ffimg.png'
import { TextInputMask } from 'react-native-masked-text'
import { useRef } from 'react';

export default function Cadastro({navigation}) {

    const address=''
    const [cpf,setCpf] = useState(null)
    const [user,setUser] = useState(null);
    const [contrato,setContrato] = useState(null);
    const [response,setResponse] = useState(null);
    const [msg, setMsg] = useState(null);
    const [nome,setNome] = useState(null);
    const [valorinvest,setValorinvest] = useState(null);
    const [bonusM,setBonusM] = useState(null);
    const [dataInicio,setDataInicio] = useState(null);
    const [dataFim,setDataFim] = useState(null);
    const [bonusP,setBonusP] = useState(null);
    const [email,setEmail] = useState(null);
    const [senha,setSenha] = useState(null);
    const [confsenha,setConfsenha] = useState(null);
    const [ativo,setAtivo] = useState(null);
    const [num,setNum] = useState(null);
    
    const cpfRef=useRef(null);
    const dinvest=useRef(null);
    const dinicio=useRef(null);
    const dfim=useRef(null);

    


    useEffect(()=>{
        getUser();
    },[]);


    //Pegar o id do usuário
    async function getUser()
    {
        let response=await AsyncStorage.getItem('userData');
        let json=JSON.parse(response);
        setUser(json.id);
    }

    

    //Envio do formulário
    async function sendForm()
    {
      const unmaskcpf = cpfRef?.current.getRawValue();
      const unmaskdinvest = dinvest?.current.getRawValue();
      const unmaskdinicio = dinicio?.current.getRawValue();
      const unmaskdfim = dfim?.current.getRawValue();
      

        let response=await fetch(config.urlRoot+'cadastro',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userId: user,
                contrato: contrato,
                nome: nome,
                valorinvestido: unmaskdinvest,
                bonusP:bonusP,
                dataInicio:unmaskdinicio,
                dataFim:unmaskdfim,
                senha:senha,
                email:email,
                confsenha:confsenha,
                cpf:unmaskcpf,
                ativo:'Ativo',
                bonusI:0
            })
            
        });
        let json=await response.json();
        console.log(json)
        Alert.alert("Otimo!", "Conta criada com sucesso!");
        navigation.navigate('Sobre')
    }

    return (
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
            right:10,
            textAlign:'right',
            marginTop:'8.5%',
            position:'absolute',}}
            size={26}
            color={'#FFF'}
            onPress={()=>navigation.navigate('Sobre')}
          />
          
          
            
          </View>
          
          <ScrollView style={styles.scrollView}>
          
        <View style={styles.title}>
        <KeyboardAvoidingView
        >
          <Text style={styles.profille}> Cadastro </Text>
          
          <View>
            <Text style={{color:'#FFF', alignSelf:'center'}}>{msg}</Text>
          <TextInput
          placeholder={'Nome e Sobrenome'}
          style={styles.input}
          onChangeText={text=>setNome(text)}
          />

          <TextInputMask
            type={'cnpj'}
            placeholder={'Digite o CNPJ ou CPF'}
            style={styles.input}
            keyboardType='numeric'
            value={cpf}
            onChangeText={text=>setCpf(text)}
            ref={cpfRef}
          />

          

          
        <TextInputMask
            type={'cel-phone'}
            placeholder={'Numero para contato'}
            style={styles.input}
            options={{
              maskType:'BRL' ,
              withDDD: true,
              dddMask:'(99) '
            }} 
            value={num}
            onChangeText={text=>setNum(text)}
          />

        <TextInput
          placeholder={'E-mail'}
          style={styles.input}
          onChangeText={text=>setEmail(text)}
          />


        <TextInput
          placeholder={'Senha'}
          style={styles.input}
          onChangeText={text=>setSenha(text)}
          />

          <TextInput
          placeholder={' Confirmar Senha'}
          style={styles.input}
          onChangeText={text=>setConfsenha(text)}
          />
        
        <TextInputMask
            type={'money'}
            placeholder={'Valor investido'}
            style={styles.input}
            
            value={valorinvest}
            onChangeText={text=>setValorinvest(text)}
            ref={dinvest}
          />

          

          <TextInput
          placeholder={'Porcentagem'}
          style={styles.input}
          onChangeText={text=>setBonusP(text)}
          keyboardType={'numeric'}
          />

          <TextInput
          placeholder={'Contrato em Meses'}
          style={styles.input}
          onChangeText={text=>setContrato(text)}
          keyboardType={'numeric'}
          />


          <TextInputMask
            type={'datetime'}
            placeholder={'Inicio do Contrato'}
            style={styles.input}
            options={{
              format: 'DD/MM/YYYY'
            }}
            value={dataInicio}
            onChangeText={text=>setDataInicio(text)}
            ref={dinicio}
          />
          

          <TextInputMask
            type={'datetime'}
            placeholder={'Termino do Contrato'}
            style={styles.input}
            options={{
              format: 'DD/MM/YYYY'
            }}
            value={dataFim}
            onChangeText={text=>setDataFim(text)}
            ref={dfim}
          />

          
        </View>
          <TouchableOpacity
          onPress={()=>sendForm()}
          style={{backgroundColor:'#252570',padding:10,marginTop:20, borderRadius:10}}
          >
           
            <Text style={{alignSelf:'center',color:'#DDD'}}>Criar conta</Text>           
          </TouchableOpacity>
          
         
                
          

          
          </KeyboardAvoidingView>
         </View>
         
        </ScrollView>
        
        <StatusBar style="light" />
      </ImageBackground>
    );
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
        backgroundColor: '#12121210',
      },
      profille:{
        fontSize:20,
        textAlign:'center',
        padding:5,
        alignItems:'center',
        justifyContent:'center',
        color:'#E1E7E4',
        fontFamily: 'monte-serrat2'
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