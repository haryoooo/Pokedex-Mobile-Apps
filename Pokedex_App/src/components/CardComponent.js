import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {pokemonType} from '../pokemonTypeColor';

export default function CardComponent(props) {
  return (
    <>
      <View style={style.card}>
        <Text style={style.text}>{props.name}</Text>
        <Image source={{uri: props.img}} style={style.pokemonImg}></Image>
        <View>
          {props.type.map(value => {
            const el = value.toLowerCase();
            return (
              <View style={style.type}>
                <Text
                  style={{
                    borderRadius: 12,
                    borderWidth: 1,
                    textAlign: 'center',
                    padding: 5,
                    borderColor: 'black',
                    borderStyle: 'solid',
                    fontSize: 18,
                    fontWeight: 'bold',
                    backgroundColor: pokemonType[el],
                  }}>
                  {value}
                </Text>
              </View>
            );
          })}
        </View>
      </View>
      <View style={style.containerImg}>
        <Image
          source={require('../assets/PokemonSymbol2.png')}
          style={style.image}>
          {props.image}
        </Image>
      </View>
    </>
  );
}

const style = StyleSheet.create({

  card: {
    shadowColor: '#000',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 1.0,
    elevation: 7,
    maxWidth: 500,
    borderColor: 'black',
    borderEndColor: 'black',
    borderStyle: 'solid',
    padding: 70,
    marginVertical: 10,
    marginHorizontal: 8,
    borderRadius: 10,
  },

  pokemonImg: {
    width: 120,
    height: 120,
  },

  containerImg: {
    flex: 1,
    justifyContent: 'flex-end',
    zIndex: 0,
  },

  type: {
    maxWidth: 90,
    marginVertical: 10,
    marginHorizontal: 10,
  },

  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  image: {
    position: 'absolute',
    opacity: 0.5,
  },
});
