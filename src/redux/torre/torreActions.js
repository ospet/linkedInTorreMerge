import axios from 'axios';
import * as actionsTypes from './torreConstants';

export function gotTorreProfile(torreProfile) {
  return { type: actionsTypes.GOT_TORRE_PROFILE, torreProfile };
}

export function getTorreProfile(personId) {
  return function (dispatch) {
    return axios.get(`/torre/people/${personId}`, { dispatch }).then((response) => {
      dispatch(gotTorreProfile(response.data));
    }, (error) => {
      console.log(error);
    });
  };
}