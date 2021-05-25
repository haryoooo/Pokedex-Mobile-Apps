import axios from 'axios';
import {url} from '../../urlConfig'
import {ADD_FAVOURITE, LOAD_LOADING_FAVOURITE, LOAD_FAVOURITE, DELETE_FAVOURITE} from './actionType';

export function loadFavourite(data) {
  return {
    type: LOAD_FAVOURITE,
    payload: data,
  };
}

export function loadLoadingFavourite(data) {
  return {
    type: LOAD_LOADING_FAVOURITE,
    payload: data,
  };
}

export function addFavourite(data) {
  return {
    type: ADD_FAVOURITE,
    payload: data,
  };
}

export function deleteFavourite(data) {
  return {
    type: DELETE_FAVOURITE,
    payload: data,
  };
}

export function AddingToFavourite(data){
  return dispatch =>{
    axios.post(`${url}/favourite`, data)
    .then(res=>{
      dispatch(addFavourite(res.data))
      alert("Successfully added to Favorite")
    })
    .catch(err=>{
      alert(err)
    })
  }
}

export function fetchFavourite() {
  return dispatch => {
    dispatch(loadLoadingFavourite(true));
    axios
      .get(`${url}/favourite`)
      .then(res => {
        dispatch(loadLoadingFavourite(false));
        dispatch(loadFavourite(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function deleteTheFavourite(id) {

  return dispatch => {
    axios
      .delete(`${url}/favourite/${id}`)
      .then(res => {
        dispatch(deleteFavourite(id));
        alert(`ID No.${id} Deleted From Favorite`)
      })
      .catch(err => {
        alert(err)
      });
  };
}
