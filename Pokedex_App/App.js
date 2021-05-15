import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import Home from './src/screens/Home';
import Region from './src/screens/Region';
import Pokedex from './src/screens/Pokedex';
import DetailPokemon from './src/screens/DetailPokemon';
import {Provider} from 'react-redux';
import store from './src/store';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{title: 'Pokedex Encyclopedia'}}
            />
            <Stack.Screen name="Region" component={Region} />
            <Stack.Screen name="Pokedex" component={Pokedex} />
            <Stack.Screen
              name="DetailPokemon"
              component={DetailPokemon}
              options={{title: 'Detail Pokemon'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
