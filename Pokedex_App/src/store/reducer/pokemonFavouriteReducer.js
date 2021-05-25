import {
  ADD_FAVOURITE,
  DELETE_FAVOURITE,
  LOAD_LOADING_FAVOURITE,
  LOAD_FAVOURITE,
} from '../action/actionType';

const initialState = {
  favourite: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FAVOURITE:
      return {
        ...state,
        favourite: action.payload,
      };

    case LOAD_LOADING_FAVOURITE:
      return {
        ...state,
        isLoading: action.payload,
      };

    case ADD_FAVOURITE:
      return {
        ...state,
        favourite: state.favourite.concat(action.payload),
      };

    case DELETE_FAVOURITE:
      return {
        ...state,
        favourite: state.favourite.filter(item => item.id !== action.payload),
      };

    default:
      return {
        ...state,
      };
  }
};
