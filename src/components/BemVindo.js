import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { estilo } from '../styles/Index';

export default class BemVindo extends Component {
    render(){
        return(
            <View>
                <View style={[estilo.logoBox]}>
                    <Text style={[estilo.logo_grande]}>Bem Vindos ao BAZZAAR</Text>
                    <Text style={[estilo.texto_branco]}>Nossos produtos são inspirados pelas pessoas que estão à nossa volta, com suas belezas e qualidades. Produtos de bom gosto especialmente para você. Descubra our sory e aproveite as promoções.</Text>
                </View>
                <View style={[estilo.logoBox]}>
                    <Text style={[estilo.texto_branco]}>Rua Esébio 10 Centro, Cidade das Águas</Text>
                    <Text style={[estilo.texto_branco]}>Aberta da segunda a sexta das 10:00 às 21:00</Text>
                    <Image source={require("../images/lojaroupas.jpeg")} style={{width: 400, height: 300}}/>
                </View>
            </View>
            
            
        );
    }
}