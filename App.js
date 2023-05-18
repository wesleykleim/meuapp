import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
    <ScrollView style={styles.scrollview}>  
      <Text style={styles.tituloP}>Oficina Mecânica </Text>
      <Image source={require('./assets/img/bomba.jpg')} style={styles.logo}/>

      <View style={styles.bloco}>
        <Text style={styles.tit}>JS Bombas Injetoras </Text>
        <Text style={styles.desc}>Oficina especializada em bombas e bicos injetores  </Text>
      </View>

      <View style={styles.bloco}>
        <Text style={styles.tit}>Endereço </Text>
        <Text style={styles.desc}>Rua Antônio Pinto do Rego Freitas 470 (Vila São Silvestre), São Paulo, SP, 05356-030 ·</Text>
      </View>

      <View style={styles.bloco}>
        <Text style={styles.tit}>Contato</Text>
        <Text style={styles.desc}>Fixo: (11) 3719-0894 / Watsapp (11) 95659-5917  </Text>
        <Text style={styles.ligar}>LIGAR</Text>
      </View>

      <View style={styles.bloco}>
        <Text style={styles.tit}></Text>
        <Text style={styles.desc}>Oficina especializada em bombas e bicos injetores  </Text>
      </View>
      </ScrollView>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0C4DE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tituloP: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    fontFamily: 'Arial',

  },
  bloco:{
    backgroundColor:'#fff',
    width: 450,
    borderRadius: 5,
    padding :20,
    margin:10,
    
  },

  logo:{
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 10,

  },

  tit: {
    color: '#2F4F4F',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Arial',

  },

  ligar:{
    backgroundColor: 'green',
    textAlign: 'center',
    padding: 10,
    margin: 10,
    borderRadius:10,
  },

  desc: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    fontFamily: 'Arial',
    textAlign: 'center'

  },

  scrollview:{
    marginTop: 50,
  }

});
