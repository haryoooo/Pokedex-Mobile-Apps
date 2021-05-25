import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchPokemon} from '../store/action/pokemonAction';
import CardComponent from '../components/CardComponent';
import {Text} from 'react-native-elements';
import Centers from '../helpers';
import SearchBarComponent from '../components/SearchBarComponent';

export default function Pokedex({navigation}) {
  const {pokemon, isLoading} = useSelector(state => state.pokemonReducer);
  const [Filtered, setFiltered] = useState([]);
  const [FilterName, setFilterName] = useState('');
  const dispatch = useDispatch();

  function filterName(text) {
    setFilterName(text);
    searchFilter(text);
  }

  function searchFilter(value) {
    let filterByName;

    filterByName = pokemon.filter(el => {
      return el.name.toLowerCase().includes(value.toLowerCase());
    });
    setFiltered(filterByName);
  }

  useEffect(() => {
    dispatch(fetchPokemon());
  }, []);

  if (isLoading) {
    return (
      <Centers>
        <ActivityIndicator size="large" color="#0000ff" />
      </Centers>
    );
  }

  if (FilterName) {
    return (
      <View>
        <SearchBarComponent filterName={filterName} />
        <ScrollView>
          <View style={styles.container}>
            {Filtered.map((value, id) => {
              return (
                <TouchableOpacity
                  key={id}
                  style={styles.container}
                  onPress={() =>
                    navigation.navigate('DetailPokemon', {id: value.id})
                  }>
                  <CardComponent
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
  } else {
    return (
      <View>
        <SearchBarComponent filterName={filterName} />
        <ScrollView>
          <View style={styles.container}>
            {pokemon.map((value, id) => {
              return (
                <TouchableOpacity
                  key={id}
                  style={styles.container}
                  onPress={() =>
                    navigation.navigate('DetailPokemon', {id: value.id})
                  }>
                  <CardComponent
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
