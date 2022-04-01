import React , { Component } from 'react';
import { estilo, footer } from '../../styles/Index';
import { View, ScrollView } from 'react-native';
import Feminino from '../../components/Feminino'
import Masculino from '../../components/Masculino';

export default class Produtos extends Component{
    render(){
        return(
            <View style={[estilo.background]}>
                <ScrollView>
                    <Feminino />
                    <Masculino />
                </ScrollView>
            </View>
        );
    }
}