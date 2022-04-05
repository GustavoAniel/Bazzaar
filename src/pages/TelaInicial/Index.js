import React, { Component } from 'react';
import { estilo, footer } from '../../styles/Index';
import { View, ScrollView, Image, Text, StyleSheet } from 'react-native';
import Navbar from '../../components/Navbar';
import Carrossel from '../../components/Carrossel';
import BemVindo from '../../components/BemVindo';
import LinearGradient from 'react-native-linear-gradient';

export default class TelaInicial extends Component{
    render(){
        return(
            <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 1}} colors={['#15D36D', '#15BD9F', '#15A5D3']}   style={styles.linearGradient}>
                <Text style={styles.textShadow}>NOVIDADES</Text>
                <View style={styles.backgroundCardPai}>
                  <View style={styles.backgroundCard}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['#1C1C1C', 'rgba(255, 255, 255, 0)']} style={styles.card} >
                      <Image style={[styles.imagem]} source={require("../../images/modelo1.jpeg")}></Image>
                      <Text style={styles.tituloCard}>Blusa de frio</Text>
                      <Text style={styles.preco}>R$229,99</Text>
                    </LinearGradient>
                  </View>
                </View>      
            </LinearGradient>
        );
    }
}

var styles = StyleSheet.create({
    linearGradient: {
      flex: 1,
      borderRadius: 5
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent'
    },
    textShadow: {
      fontFamily: 'AntDesign',
      fontWeight: 'bold',
      fontSize: 30,
      color: 'white',
      textShadowColor: 'rgba(0, 0, 0, 0.25)',
      textShadowOffset: {width: 0 , height: 4},
      textShadowRadius: 5,
      marginLeft: 15,
      marginTop: 26
    },
    card: {
     width: '100%',
     height: 400,
     borderRadius: 10,
     shadowColor: 'black',
     shadowOffset: {width: 1, height: 5},
     shadowRadius: 1,
     borderColor: 'black',
     borderWidth: 0.2,
     position:'relative' //Se o card quebrar, pode ser isso aqui
    },
    backgroundCard: {
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      padding: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      marginTop: 50,
      
    },
    backgroundCardPai: {
      
    },
    imagem: {
      width: 200,
      height: 300,
      alignSelf: 'center',
      borderRadius: 10
    },
    tituloCard: {
      color: 'white',
      fontSize: 40,
      textShadowColor: 'rgba(0, 0, 0, 0.25)',
      textShadowOffset: {width: 0 , height: 4},
      textShadowRadius: 5,
      textAlign: 'center',

    },
    preco: {
      color: '#15D36D',
      fontSize: 32,
      textAlign: 'center',
      textShadowColor: 'rgba(0, 0, 0, 0.25)',
      textShadowOffset: {width: 0 , height: 5},
      textShadowRadius: 4,
    }
  });