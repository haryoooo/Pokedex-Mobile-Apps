import React, {useEffect} from 'react';
import {StyleSheet, View, ActivityIndicator, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Text, ListItem, Icon} from 'react-native-elements';
import {deleteTheFavourite, fetchFavourite} from '../store/action/pokemonFavouriteAction';
import Centers from '../helpers'
import FavoriteComponent from '../components/FavoriteComponent';

export default function Favourite() {
  const {favourite, isLoading} = useSelector(
    state => state.pokemonFavouriteReducer,
  );
  const dispatch = useDispatch();

  function removeFavourite(id){
    dispatch(deleteTheFavourite(id))
  }

  useEffect(() => {
    dispatch(fetchFavourite());
  }, []);

  if (isLoading) {
    return (
      <Centers>
        <ActivityIndicator size="large" color="#0000ff" />
      </Centers>
    );
  } else {
    return (
      <View style={style.container}>
        <Text h3 style={{marginBottom: 30}}>
          Favorite
        </Text>
        <ScrollView>
        {favourite.map((value,idx) => {
          return (
            <ListItem key={idx} style={style.list}>
              <FavoriteComponent 
                name={value.name}
                img={value.img}
                type={value.type}
              />
              <View style={style.icon}>
                <Icon name="cancel" size={30} color="gray" onPress={() => removeFavourite(value.id)} />
              </View>
            </ListItem>
          );
        })}
        </ScrollView>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    margin: 10,
  },

  list:{
    marginVertical: 20,
    paddingVertical: 20,
    color: 'orange'
  },

  icon: {
    flex: 0,
    alignSelf: 'flex-start',
  }
});
