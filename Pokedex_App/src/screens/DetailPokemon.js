import React, {useEffect, useState} from 'react';
import {url} from '../urlConfig';
import {View, Alert, StyleSheet, Image, ActivityIndicator} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import Centers from '../helpers'
import axios from 'axios';
import {Text} from 'react-native-elements';

export default function DetailPokemon({route}) {
  const [detailPokemon, setDetailPokemon] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const id = route.params.id;

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${url}/pokedex/${id}`)
      .then(res => {
        setDetailPokemon(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        Alert(err);
      });
  }, []);

  if (isLoading) {
    return <Centers><ActivityIndicator size="large" color="#0000ff" /></Centers>;
  } else {
    return (
      <>
        <View>
          <Text h3 style={style.pokemonName}>
            {detailPokemon.name}
          </Text>
          <Text h4 style={style.pokemonID}>
            #00{detailPokemon.id}
          </Text>
          <View style={style.pokemonType}>
            <Text>{detailPokemon.type}</Text>
          </View>
          <View style={style.helper}>
            <Image
              source={{uri: detailPokemon.img}}
              style={style.pokemonImage}
            />
          </View>
        </View>

        <View style={style.container}>
          <View style={style.textHeader}>
            <View style={{flex: 1, padding: 20, marginVertical: 20}}>
              <Text h4 style={style.textEffect}>
                Base Statistics
              </Text>
              <Text>HP</Text>
              <ProgressBar 
                progress={Math.round(JSON.stringify(detailPokemon && detailPokemon.base ? detailPokemon.base.HP : null)) / 100}
                style={{marginVertical: 10}} 
              />
              <Text>Attack</Text>
              <ProgressBar 
                progress={Math.round(JSON.stringify(detailPokemon && detailPokemon.base ? detailPokemon.base.Attack : null)) / 100}
                style={{marginVertical: 10}}
              />
              <Text>Defense</Text>
              <ProgressBar 
                progress={Math.round(JSON.stringify(detailPokemon && detailPokemon.base ? detailPokemon.base.Defense : null)) / 100} 
                style={{marginVertical: 10}}
              />
              <Text>Sp. Attack</Text>
              <ProgressBar 
                progress={Math.round(JSON.stringify(detailPokemon && detailPokemon.base ? detailPokemon.base.SpAttack : null)) / 100} 
                style={{marginVertical: 10}}
              />
              <Text>Sp. Defense</Text>
              <ProgressBar 
                progress={Math.round(JSON.stringify(detailPokemon && detailPokemon.base ? detailPokemon.base.SpDefense : null)) / 100} 
                style={{marginVertical: 10}}
              />
              <Text>Speed</Text>
              <ProgressBar 
                progress={Math.round(JSON.stringify(detailPokemon && detailPokemon.base ? detailPokemon.base.Speed : null)) / 100} 
                style={{marginVertical: 10}}
              />
            </View>
          </View>
        </View>
      </>
    );
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderColor: 'black',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    borderWidth: 2,
    marginTop: 200,
    height: 400,
  },

  textHeader: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },

  helper: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    top: 120,
  },

  textEffect: {
    borderBottomWidth: 2,
    marginBottom: 20,
    borderBottomColor: 'darkgray',
    borderStyle: 'solid',
    marginHorizontal: 60,
    textAlign: 'center'
  },

  pokemonName: {
    flex: 0,
    paddingLeft: 20,
    top: 20,
  },

  pokemonID: {
    flex: 0,
    alignSelf: 'flex-end',
    paddingRight: 20,
  },

  pokemonImage: {
    height: 150,
    width: 150,
  },

  pokemonType: {
    maxWidth: 120,
    marginVertical: 10,
    marginHorizontal: 10,
    paddingLeft: 20,
  },
});
