import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import Centers from '../helpers';
export default function FavoriteComponent(props) {

  return (
    <>
    <Centers>
      <View style={style.listItem}>
        <Text>{props.id}</Text>
        <Text h4>{props.name}</Text>
        <Image style={style.pokemonImg} source={{uri: props.img}} />
      </View>
    </Centers>
    </>
  );
}

const style = StyleSheet.create({
  listItem: {
    padding: 10,
  },
  pokemonImg: {
    top: 10,
    width: 120,
    height: 120,
  },
});
