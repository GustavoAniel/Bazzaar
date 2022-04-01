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
                    <BemVindo />
                </ScrollView>
            </View>
        );
    }
}