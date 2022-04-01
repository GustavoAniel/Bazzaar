import React, { Component } from 'react';
import { estilo, pagamento } from '../../styles/Index';
import { View, ScrollView, Image, Text } from 'react-native';

export default class Pagamento extends Component{
    render(){
        return(
            <View style={[estilo.background]}>
                <ScrollView>
                    <Text style={[estilo.logo_grande]}>Aceitamos:</Text>
                    <View style={{alignItems: 'center'}}>
                        <Image source={require("../../images/visa_G.png")} style={pagamento.imagens}/>
                        <Image source={require("../../images/mastercard_G.png")} style={pagamento.imagens}/>
                        <Image source={require("../../images/paypal_G.png")} style={pagamento.imagens}/>
                        <Image source={require("../../images/bitcoin_G.png")} style={pagamento.imagens}/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}