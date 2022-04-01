import React, { Component } from 'react'
import Index from './src/pages/TelaInicial/Index';
import SaibaMais from './src/pages/SaibaMais/Index';
import Icone from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Produtos from './src/pages/Produtos/Index';
import Cartao from './src/pages/Pagamento/Index';

const Tab = createBottomTabNavigator();

const icons = {
  TelaInicial: {
    name: 'home'
  },
  Categorias: {
    name: 'menu-outline'
  },
  SaibaMais: {
    name: 'business'
  },
  Pagamento: {
    name: 'card-outline'
  }
};

export default class App extends Component{
  render(){
    
    return(

      <NavigationContainer>
        <Tab.Navigator screenOptions={ ({route}) => ({
          tabBarIcon: ({color, size }) => {
            const { name } = icons[route.name];
            return <Icone name={name} color={color} size={size} />
          }
        })}>
          <Tab.Screen  name="TelaInicial" component={Index}/>
          <Tab.Screen  name="Categorias" component={Produtos}/>
          <Tab.Screen  name="SaibaMais" component={SaibaMais}/>
          <Tab.Screen  name="Pagamento" component={Cartao}/>

        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}