import React from "react";
import { 
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity
} from "react-native";
import {Feather} from '@expo/vector-icons'
import {MotiView, MotiText} from 'moti'

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22: 64;

export default function Header({name}){
 return(
    <View style={styles.container}>
        <MotiView style={styles.content} 
        from={{
            translateY: -150,
            opacity: 0
        }}
        animate={{
            translateY: 0,
            opacity: 1
        }}
        transition={{
            type: 'timing',
            duration: 800,
            delay: 300
        }}
        >
            <MotiText style={styles.username}
            from={{
                translateX: -150,
            }}
            animate={{
                translateX: 0,
            }}
            transition={{
                type: 'timing',
                duration: 800,
                delay: 800
            }}
            >{name}</MotiText>
        

            <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
            <Feather name="user" size={27} color='#FFF'/>
            </TouchableOpacity>
        </MotiView>
    </View>
 )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#8000ff",
        paddingTop: StatusBarHeight,flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },
    content:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    username:{
        fontSize:18,
        color:"#FFF",
        fontWeight:"bold"
    },
    buttonUser:{
        width:44,
        height:44,
        backgroundColor: "rgba(255,255,255, 0.5)",
        justifyContent:"center",
        alignItems: "center",
        borderRadius: 44 / 2
        
    }
})




















// StatusBar.currentHeight: significa o tamanho atual do StatusBar


/* 

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22: 64; 

as plataformas ios e android são diferentes, Status só é reconhecido a plataforma android, não na ios.

então fizemos uma verificação, para saber se nas plataformas o StatusBar está sendo recebido, se estiver, o tamanho será de 22, senão será de 64.
*/

// activeOpacity={}: controle sobre a opacidade do elemento 



// MotiView: from={{}}: é de onde e como a nossa animação vai começar

// MotiView: animate={{}}: pra onde a nossa animação vai, como ela termina
 
/*
    MotiView: transition={{
        type: para sabe o tipo datransição

        duration: duração da transição

        delay: o delay da transição
    }}:  
 */