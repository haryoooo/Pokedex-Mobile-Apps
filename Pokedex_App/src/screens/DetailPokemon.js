import React, {useEffect, useState} from 'react';
import {url} from '../urlConfig';
import {useDispatch, useSelector} from 'react-redux';
import {View, Alert, StyleSheet, Image, ActivityIndicator} from 'react-native';
import {ProgressBar, Colors} from 'react-native-paper';
import {pokemonType} from '../pokemonTypeColor';
import Centers from '../helpers';
import axios from 'axios';
import {Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import {AddingToFavourite} from '../store/action/pokemonFavouriteAction';

export default function DetailPokemon({route}) {
  const {favourite} = useSelector(state => state.pokemonFavouriteReducer);
  const [detailPokemon, setDetailPokemon] = useState('');
  const dispatch = useDispatch();

  const id = route.params.id;

  function generateID() {
    let num = 0;
    return num + 1;
  }

  function padLeadingZeros(num, size) {
    let s = num + '';
    while (s.length < size) s = '0' + s;
    return s;
  }

  function addFavorite() {
    const data = {
      id: generateID,
      name: detailPokemon.name,
      img: detailPokemon.img,
      type: detailPokemon.type,
      base: detailPokemon.base,
    };

    dispatch(AddingToFavourite(data));
  }

  useEffect(() => {
    axios
      .get(`${url}/pokedex/${id}`)
      .then(res => {
        setDetailPokemon(res.data);
      })
      .catch(err => {
        Alert(err);
      });
  }, []);

  if (!detailPokemon) {
    return (
      <Centers>
        <ActivityIndicator size="large" color="#0000ff" />
      </Centers>
    );
  } else {
    return (
      <>
        <View>
          <Text h3 style={style.pokemonName}>
            {detailPokemon.name}
          </Text>
          <Text h4 style={style.pokemonID}>
            {padLeadingZeros(detailPokemon.id, 3)}{' '}
            <Icon name="hearto" size={30} color="gray" onPress={addFavorite} />
          </Text>
          <View style={style.pokemonType}>
            {detailPokemon.type.map((value, id) => {
              const el = value.toLowerCase();
              return (
                <View style={style.type} key={id}>
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
                progress={
                  Math.round(
                    JSON.stringify(
                      detailPokemon && detailPokemon.base
                        ? detailPokemon.base.HP
                        : null,
                    ),
                  ) / 100
                }
                color={Colors.blue700}
                style={{marginVertical: 8, height: 7}}
              />
              <Text>Attack</Text>
              <ProgressBar
                progress={
                  Math.round(
                    JSON.stringify(
                      detailPokemon && detailPokemon.base
                        ? detailPokemon.base.Attack
                        : null,
                    ),
                  ) / 100
                }
                color={Colors.blue700}
                style={{marginVertical: 8, height: 7}}
              />
              <Text>Defense</Text>
              <ProgressBar
                progress={
                  Math.round(
                    JSON.stringify(
                      detailPokemon && detailPokemon.base
                        ? detailPokemon.base.Defense
                        : null,
                    ),
                  ) / 100
                }
                color={Colors.blue700}
                style={{marginVertical: 8, height: 7}}
              />
              <Text>Sp. Attack</Text>
              <ProgressBar
                progress={
                  Math.round(
                    JSON.stringify(
                      detailPokemon && detailPokemon.base
                        ? detailPokemon.base.SpAttack
                        : null,
                    ),
                  ) / 100
                }
                color={Colors.blue700}
                style={{marginVertical: 8, height: 7}}
              />
              <Text>Sp. Defense</Text>
              <ProgressBar
                progress={
                  Math.round(
                    JSON.stringify(
                      detailPokemon && detailPokemon.base
                        ? detailPokemon.base.SpDefense
                        : null,
                    ),
                  ) / 100
                }
                color={Colors.blue700}
                style={{marginVertical: 8, height: 7}}
              />
              <Text>Speed</Text>
              <ProgressBar
                progress={
                  Math.round(
                    JSON.stringify(
                      detailPokemon && detailPokemon.base
                        ? detailPokemon.base.Speed
                        : null,
                    ),
                  ) / 100
                }
                color={Colors.blue700}
                style={{marginVertical: 8, height: 7}}
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
    borderWidth: 1,
    marginTop: 110,
    height: 420,
  },

  textHeader: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },

  type: {
    marginVertical: 5,
    marginHorizontal: 10,
  },

  helper: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    top: 70,
    zIndex: 2,
  },

  textEffect: {
    borderBottomWidth: 2,
    marginBottom: 20,
    borderBottomColor: 'darkgray',
    borderStyle: 'solid',
    marginHorizontal: 60,
    textAlign: 'center',
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
    height: 140,
    width: 140,
  },

  pokemonType: {
    maxWidth: 120,
    marginHorizontal: 10,
    paddingLeft: 20,
  },
});
