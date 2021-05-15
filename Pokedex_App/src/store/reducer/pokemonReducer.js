import {
  LOAD_POKEMON,
  LOAD_LOADING_POKEMON,
  FILTERED_POKEMON,
} from '../action/actionType';

const initialState = {
  pokemon: [],
  filterPokemon: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
      };

    case LOAD_LOADING_POKEMON:
      return {
        ...state,
        isLoading: action.payload,
      };

    case FILTERED_POKEMON:
      return {
        ...state,
        filterPokemon: action.payload,
      };

    default:
      return state;
  }
};
