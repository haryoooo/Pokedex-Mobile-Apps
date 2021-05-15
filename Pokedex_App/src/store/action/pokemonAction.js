import axios from 'axios';
import {Alert} from 'react-native';
import {url} from '../../urlConfig'
import {
  LOAD_POKEMON,
  LOAD_DETAIL_POKEMON,
  LOAD_DETAIL_LOADING_POKEMON,
  LOAD_LOADING_POKEMON,
  FILTERED_POKEMON,
} from './actionType';

export function loadPokemon(data) {
  return {
    type: LOAD_POKEMON,
    payload: data,
  };
}

export function loadDetailPokemon(data) {
  return {
    type: LOAD_DETAIL_POKEMON,
    payload: data,
  };
}

export function loadDetailLoadingPokemon(data) {
  return {
    type: LOAD_DETAIL_LOADING_POKEMON,
    payload: data,
  };
}

export function loadingPokemon(data) {
  return {
    type: LOAD_LOADING_POKEMON,
    payload: data,
  };
}

export function filterThePokemon(data) {
  return {
    type: FILTERED_POKEMON,
    payload: data,
  };
}

export function fetchPokemon() {
  return dispatch => {
    dispatch(loadingPokemon(true));
    axios
      .get(`${url}/pokedex/`)
      .then(res => {
        dispatch(loadPokemon(res.data));
        dispatch(loadingPokemon(false));
      })
      .catch(err => {
        Alert(err);
      });
  };
}

// export function setFilterPokemon(inputSearch, pokemon) {
//   return dispatch => {
//     if(inputSearch !== ""){
//       let filteringPokemon = pokemon.filter(value=>{
//         value.name.toLowerCase().includes(inputSearch.toLowerCase())
//       })
//       dispatch(filterThePokemon(filteringPokemon))
//     }
//     else{
//       dispatch(fetchPokemon(pokemon))
//     }
//   };
// }
