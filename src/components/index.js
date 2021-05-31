import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import {Entypo} from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function TaskList({data}){
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <Entypo name = 'credit' size={35} color = '#000' />
            </TouchableOpacity>
            <View style={styles.task}>
                <Text>{ data.task }</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({

    container:{
        flex:1,
        margin:10,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#E1E7E4',
        borderRadius:5,
        padding:7,
        elevation:1.5,
        shadowColor:'#121212',
        shadowOpacity:0.2,
        shadowOffset:{
            width:1,
            height:3,

        }
    },
    task:{
        color:'#121212',
        fontSize:20,
        paddingLeft:8,
        paddingRight:20,

    }

})
