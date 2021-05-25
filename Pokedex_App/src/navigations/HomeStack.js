import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Pokedex from '../screens/Pokedex';
import DetailPokemon from '../screens/DetailPokemon';

export default function HomeStack() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{title: 'Pokedex Encyclopedia'}}
            />
            <Stack.Screen 
                name="Pokedex" 
                component={Pokedex} 
                options={{title: 'Kanto Region'}} 
            />
            <Stack.Screen
              name="DetailPokemon"
              component={DetailPokemon}
              options={{title: 'Detail Pokemon'}}
            />
          </Stack.Navigator>
    )
}
