import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native'; 
import { navbar, estilo, botoes } from '../styles/Index'

export default class Navbar extends Component{
    render(){

    
        return(
            <View style={[navbar.background]}>
                <TouchableOpacity style={[botoes.circular_categorias]}>
                    <Text style={[navbar.texto]}>Populares</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[botoes.circular_categorias]}>
                    <Text style={[navbar.texto]}>Promoções</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[botoes.circular_categorias]}>
                    <Text style={[navbar.texto]}>Feminino</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[botoes.circular_categorias]}>
                    <Text style={[navbar.texto]}>Masculino</Text>
                </TouchableOpacity>
            </View>
        )
    }
}