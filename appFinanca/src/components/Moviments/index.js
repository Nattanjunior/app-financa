import { useState } from 'react';
import { 
    View ,
    Text,
    StyleSheet,
    TouchableOpacity

} from 'react-native';
import {MotiView,AnimatePresence, MotiText} from 'moti'

export default function Moviments({data}) {
    const [visibleValue, setVisibleValue] = useState(false)

 return (
   <TouchableOpacity style={styles.container} onPress={()=> setVisibleValue(!visibleValue)}>
    <Text style={styles.date}>{data.date}</Text>


    <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>

       {visibleValue ? (
        <AnimatePresence exitBeforeEnter >
            <MotiText style={data.type === 1? styles.value : styles.expenses }
            from={{
                translateX:100,
            }}
            animate={{
                translateX:0
            }}
            transition={{
                type:"timing",
                duration: 500
            }}
            
            >{data.type === 1? `R$ ${data.value} `:`R$ -${data.value} `}</MotiText>
        </AnimatePresence>

       ):(

        <AnimatePresence exitBeforeEnter>
            <MotiView style={styles.skaleton}
            from={{opacity:0}}
            animate={{opacity:1}}
            transition={{type:"timing"}}
            
            >
            </MotiView>
        </AnimatePresence>
            
        
       )}

    </View>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
       flex:1,
       marginBottom: 24,
       borderBottomWidth: 0.5,
       borderBottomColor: '#DADADA'
    },
    content:{
        flexDirection:"row",
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,
    },
    date:{
        color: "#DADADA",
        fontWeight: "bold"
    },
    label:{
        fontWeight:"bold",
        fontSize: 16
    },
    value:{
        fontSize: 16,
        color: "#2ecc71",
        fontWeight: "bold"
    },
    expenses:{
        fontSize: 16,
        color: "#e74c3c",
        fontWeight: "bold"
    },
    skaleton:{
        marginTop:6,
        width: 80,
        height: 10,
        backgroundColor: "#DADADA",
        borderRadius: 8
    }
})


// AnimatePresence: é usada para criar animações, ele gerencia automaticamente as animações quando os elementos são adicionados ou retirados. 

//exitBeforeEnter: é propriedade  que garante que a saida de um elemento seja concluída antes que um novo elemento seja animado para entrar. Isso evita sobreposições