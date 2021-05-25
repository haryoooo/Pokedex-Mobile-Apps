// import React from 'react';
// import CardComponent from '../components/CardComponent'
// import {
//   StyleSheet,
//   ScrollView,
//   View,
//   ActivityIndicator,
//   TouchableOpacity,
// } from 'react-native';
// import Centers from '../helpers'
 
// export default function PokedexComponent(props) {

//   if (props.isLoading) {
//     return (
//       <Centers>
//         <ActivityIndicator size="large" color="#0000ff" />
//       </Centers>
//     );
//   } else {
//     return (
//       <View>
//         <ScrollView>
//           <View style={styles.container}>
//             {props.pokemon.map((value, id) => {
//               return (
//                 <TouchableOpacity
//                   key={id}
//                   style={styles.container}
//                   onPress={() =>
//                     props.navigation.navigate('DetailPokemon', {id: value.id})
//                   }>
//                   <CardComponent
//                     name={value.name}
//                     type={value.type}
//                     image={value.image}
//                     img={value.img}
//                   />
//                 </TouchableOpacity>
//               );
//             })}
//           </View>
//         </ScrollView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     padding: 10,
//   },

//   text: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },

//   searchBar: {
//     flex: 0,
//     alignSelf: 'center',
//     minWidth: 300,
//     marginVertical: 40,
//   },
// });
