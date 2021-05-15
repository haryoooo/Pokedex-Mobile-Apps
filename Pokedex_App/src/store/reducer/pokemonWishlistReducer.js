import {
  ADD_WISHLIST,
  DELETE_WISHLIST,
  LOAD_LOADING_WISHLIST,
  LOAD_WISHLIST,
} from '../action/actionType';

const initialState = {
  wishlist: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_WISHLIST:
      return {
        ...state,
        wishlist: action.payload,
      };

    case LOAD_LOADING_WISHLIST:
      return {
        ...state,
        wishlist: action.payload,
      };

    case ADD_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.concat(action.payload),
      };

    case DELETE_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.id !== action.payload),
      };

    default:
      return {
        ...state,
      };
  }
};
