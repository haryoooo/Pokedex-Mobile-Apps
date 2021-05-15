import axios from 'axios';
import {Alert} from 'react-native';
import {ADD_WISHLIST, LOAD_LOADING_WISHLIST, LOAD_WISHLIST, DELETE_WISHLIST} from './actionType';

export function loadWishlist(data) {
  return {
    type: LOAD_WISHLIST,
    payload: data,
  };
}

export function loadLoadingWishlist(data) {
  return {
    type: LOAD_LOADING_WISHLIST,
    payload: data,
  };
}

export function addWishlist(data) {
  return {
    type: ADD_WISHLIST,
    payload: data,
  };
}

export function deleteWishlist(data) {
  return {
    type: DELETE_WISHLIST,
    payload: data,
  };
}

// export function fetchPokemon() {
//   return dispatch => {
//     dispatch(loadingPokemon(true));
//     axios
//       .get(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=0/results`)
//       .then(res => {
//         dispatch(loadPokemon(res.data));
//         dispatch(loadingPokemon(false));
//       })
//       .catch(err => {
//         Alert(err);
//       });
//   };
// }
