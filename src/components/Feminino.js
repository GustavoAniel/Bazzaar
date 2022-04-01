import React, { Component } from 'react';
import { View, Image, ScrollView, Text, TouchableOpacity, Modal } from 'react-native';
import { carrossel, botoes, modal, estilo } from '../styles/Index';

export default class Feminino extends Component{
    constructor(props){
        super(props);
        this.state = {
            modalVisivel: false,
            nome: '',
            preco: 0.0,
            cor: '',
            imagem: 0,
            imagens: [<Image style={[carrossel.imagem_carrossel]} source={require("../images/modelo1.jpeg")}/>,
                    <Image style={[carrossel.imagem_carrossel]} source={require("../images/modelo2.jpeg")} />,
                    <Image style={[carrossel.imagem_carrossel]} source={require("../images/modelo3.jpeg")} />,
                    <Image style={[carrossel.imagem_carrossel]} source={require("../images/modelo4.jpeg")} />,
                    <Image style={[carrossel.imagem_carrossel]} source={require("../images/modelo5.jpeg")} />,
                    <Image style={[carrossel.imagem_carrossel]} source={require("../images/modelo6.jpeg")} />,
                    ]
        };
    }
    render(){
        return(
            <View>
                <View style={{flexDirection: 'row',  margin: 5}}>
                    <Image source={require("../images/camisamulher.png")} style={{width: 24, height: 24}}/>
                    <Text style={[estilo.texto_grande]}>Feminino</Text>
                </View>
                <ScrollView horizontal={true} >
                    <View style={[carrossel.card_carrossel]}>
                        <Image style={[carrossel.imagem_carrossel]} source={require("../images/modelo3.jpeg")}/>
                        <Text style={[carrossel.texto_descricao]}>Saia Curta Florida</Text>
                        <Text style={[carrossel.texto_container]}>
                        <Text style={[carrossel.preco_semDesconto]}>R$140,00</Text>
                        <Text style={[carrossel.preco_comDesconto]}> R$60,00</Text>
                        </Text>
                        <TouchableOpacity style={[botoes.vermais]} onPress={() => this.setState({modalVisivel: true,nome: 'Saia Curta florida',cor: 'Azul',imagem: 2, preco: 60})}>
                            <Text style={[botoes.texto_branco]}>Ver mais</Text>
                        </TouchableOpacity>
                    </View>
                <View style={[carrossel.card_carrossel]}> 
                    <Image style={[carrossel.imagem_carrossel]} source={require("../images/modelo4.jpeg")} />
                    <Text style={[carrossel.texto_descricao]}>Short Jeans</Text>
                    <Text style={[carrossel.texto_container]}>
                    <Text style={[carrossel.preco_semDesconto]}>R$100,00</Text>
                    <Text style={[carrossel.preco_comDesconto]}> R$40,00</Text>
                    </Text>
                    <TouchableOpacity style={[botoes.vermais]} onPress={() => this.setState({modalVisivel: true,nome: 'Short Jeans',cor: 'Azul',imagem: 3, preco: 40})}>
                        <Text style={[botoes.texto_branco]}>Ver mais</Text>
                    </TouchableOpacity>
                </View>
                
            </ScrollView>
            <Modal animationType="slide" transparent={true} visible={this.state.modalVisivel}>
                <View style={[modal.background]}>
                {this.state.imagens[this.state.imagem]}
                <Text style={[modal.texto_modal]}>Nome: {this.state.nome}</Text>
                <Text style={[modal.texto_modal]}>Cor: {this.state.cor}</Text>
                <Text style={[modal.texto_modal]}>Preço: R${this.state.preco}</Text>
                <TouchableOpacity style={[botoes.fechar]} onPress={()=>this.setState({modalVisivel: false})}>
                    <Text style={[botoes.texto_branco]}>Fechar</Text>
                </TouchableOpacity>
                </View>
            </Modal>
        </View>
        );
    }
}