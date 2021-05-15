// import React, {useState} from 'react';
// import {StyleSheet, View, Text} from 'react-native';
// import {Searchbar} from 'react-native-paper';
// import {useSelector} from 'react-redux'

// export default function SearchBarComponent() {
//   const [searchQuery, setSearchQuery] = useState('');
//   const {pokemon} = useSelector(state => state.pokemonReducer)

//   function searchPokemon(getPokemon) {
//     setSearchQuery(getPokemon);
//   }

//   return (
//     <View style={styles.container}>
//       <Searchbar
//         placeholder="Search Pokemon"
//         onChangeText={searchPokemon}
//         value={searchQuery}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 0,
//     maxWidth: 250,
//     marginVertical: 30,
//     marginLeft: 70,
//     justifyContent: 'flex-end',
//   },
// });
