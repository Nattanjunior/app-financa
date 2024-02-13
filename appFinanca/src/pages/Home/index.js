import { StyleSheet, Text, View , FlatList} from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';


// lista ficticia
const list = [
  {
    id:1,
    label:'Boleto conta luz',
    value: '300,90',
    date: '02/02/24',
    type: 0 // despesas
  },
  {
    id:2,
    label:'Pix Cliente X',
    value: '1.723,00',
    date: '08/02/24',
    type: 1 //receita / entrada
  },
  {
    id:3,
    label:'Salário',
    value: '10.500,00',
    date: '11/02/24',
    type: 1 //receita / entrada
  }

]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name='Natan Junior'/>


      <Balance saldo='4.500' gastos='-386,96'/>   

      <Actions/> 

      <Text style={styles.title}>Ultimas movimentações</Text>

      <FlatList
      style={styles.list}
      data={list}
      keyExtractor={(item)=>String(item.id)}
      showsVerticalScrollIndicator={false}
      renderItem={({item})=> <Moviments data={item}/>}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title:{
    fontSize:18,
    fontWeight:"bold",
    margin: 14
  },
  list:{
    marginStart: 14,
    marginEnd: 14
  }
});















// showsVerticalScrollIndicator={false}: serve para tirar a barra de rolagem da lista.

// vamos instalar uma biblioteca de animações, chamada moti: 

// npm i moti --legacy-peer-deps

//O Moti usa o Reanimated 3 sob o capô para conduzir animações de alto desempenho no iOS, Android e Web.

// Moti requer que você instale o Reanimated 3+ . As versões 2 e 3 são compatíveis.'react-native-reanimated'

// expo: npx expo install react-native-reanimated

// sem expo: npm install react-native-reanimated

// tem que adicionar um plugin ao arquivo: babel.config.js

/*
   plugins: [
      ...
      'react-native-reanimated/plugin',
    ],

* */

// no app.js, precisamos importar primeiro o react reanimated: import 'react-native-reanimated'