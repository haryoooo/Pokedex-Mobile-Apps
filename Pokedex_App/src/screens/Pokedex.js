import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPokemon} from '../store/action/pokemonAction';
import CardComponent from '../components/CardComponent';
import {Text} from 'react-native-elements';
import Centers from '../helpers';
import {Searchbar} from 'react-native-paper';

export default function Pokedex({navigation}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPokemon, setFilteredPokemon] = useState('');
  const {pokemon, isLoading} = useSelector(state => state.pokemonReducer);
  const dispatch = useDispatch();
  const value = pokemon.map(value => {
    return value.name;
  });

  function searchPokemon(text) {
    setSearchQuery(text);

    if (searchQuery !== "") {
      setFilteredPokemon(
        value.filter(el => {
          return el.toLowerCase().includes(searchQuery.toLowerCase());
        }),
      );
    } else {
      setFilteredPokemon(text);
    }
  }

  useEffect(() => {
    dispatch(fetchPokemon());
  }, []);

  if (isLoading) {
    return (
      <Centers>
        <ActivityIndicator size="large" color="#0000ff"/>
      </Centers>
    );
  } else {
    return (
      <View>
        <Searchbar
          placeholder="Search Pokemon"
          onChangeText={searchPokemon}
          value={searchQuery}
          style={styles.searchBar}
        />
        <ScrollView>
          <View style={styles.container}>
            {pokemon.map(value => {
              return (
                <TouchableOpacity
                  style={styles.container}
                  onPress={() =>
                    navigation.navigate('DetailPokemon', {id: value.id})
                  }>
                  <CardComponent
                    key={value.id}
                    name={value.name}
                    type={value.type}
                    image={value.image}
                    img={value.img}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  searchBar: {
    flex: 0,
    alignSelf: 'center',
    minWidth: 300,
    marginVertical: 40,
  },
});
