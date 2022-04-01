import React, { Component } from 'react';
import { estilo, footer } from '../../styles/Index';
import { View, ScrollView, Image, Text, } from 'react-native';
import Navbar from '../../components/Navbar';
import Carrossel from '../../components/Carrossel';
import BemVindo from '../../components/BemVindo';

export default class TelaInicial extends Component{
    render(){
        return(
            <View style={[estilo.background]}>
                <ScrollView>
                        <View style={[estilo.logoBox]}>
                            <Text style={[estilo.logo_grande]}>BAZZAAR</Text>
                        </View>
                        <View style={{flexDirection: 'row', margin: 5}}>
                            <Image source={require("../../images/fire.png")} style={{width: 24, height: 24}}/>
                            <Text style={[estilo.texto_grande]}>Populares</Text>
                        </View>
                        <Carrossel />
                </ScrollView>
            </View>
        );
    }
}