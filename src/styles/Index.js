import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#34ebcc',
    },
    texto_branco: {
        color: 'white',
        fontFamily: 'Arial',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 5
    },
    logo_grande:{
        fontSize: 50,
        textAlign: 'center',
        fontFamily: 'Arial',
        marginVertical: 10,
        
    },
    texto_grande: {
        fontFamily: 'Arial',
        fontSize: 20,
        fontWeight: 'bold'
    },
    logoBox:{
        margin: 5,
        borderWidth: 2
    }

})

const navbar = StyleSheet.create({
    background: {
        backgroundColor: 'rgb(70,70,70)',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    texto: {
        color: 'white',
        fontFamily: 'Arial',
        margin: 5,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})

const carrossel = StyleSheet.create({
    card_carrossel: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        margin: 5,
        borderRadius: 5,
        padding: 5
    },  
    imagem_carrossel: {
        width: 300,
        height: 400,
        alignSelf: 'center',
        borderRadius: 5
    },
    texto_container: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    texto_descricao: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30
    },
    preco_comDesconto: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'Arial'
    },
    preco_semDesconto: {
        color: 'black',
        fontSize: 15,
        fontFamily: 'Arial',
        textDecorationLine: 'line-through'
    }
})

const botoes = StyleSheet.create({
    vermais: {
        width: '50%',
        height: 30,
        alignSelf: 'center',
        textAlign: 'center',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 3,
        justifyContent: 'center'
    },
    fechar: {
        width: '50%',
        height: 30,
        alignSelf: 'center',
        textAlign: 'center',
        backgroundColor: 'red',
        justifyContent: 'center',
        margin: 5
    },
    texto_branco: {
        color: 'white',
        fontFamily: 'Arial',
        fontSize: 15,
        textAlign: 'center'
    },
    texto_vermelho: {
        color: 'red',
        fontFamily: 'Arial',
        fontSize: 15,
        textAlign: 'center'
    },
    circular_categorias: {
        justifyContent: 'center',
        margin: 2
    },
    imagem_fogo: {
        
    }
})

const modal = StyleSheet.create({
    background: {
        backgroundColor: 'rgba(70,70,70,0.7)',
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
        flex: 1
    },
    texto_modal: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'Arial',
        textAlign: 'center'
    },
})

const footer = StyleSheet.create({
    background: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imagens: {
        width: 24, 
        height: 24, 
        margin: 2
    }
})

const pagamento = StyleSheet.create({
    imagens: {
        width: 200,
        height: 200,
    }
})



export { estilo, navbar, carrossel, botoes, modal, footer, pagamento }