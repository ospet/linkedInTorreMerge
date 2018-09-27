import axios from 'axios';
import * as actionsTypes from './linkedinConstants';

export function gotLIProfile(profile) {
  return { type: actionsTypes.GOT_LI_PROFILE, profile };
}

export function gotToken(data) {
  return { type: actionsTypes.GOT_TOKEN, liToken: data.access_token };
}

//
export function getLIToken(oauthCode) {
  return function (dispatch) {
    return axios.post(`/tok?grant_type=authorization_code&code=${oauthCode}&redirect_uri=${window.location.protocol}//${window.location.host}/linkedin&client_id=78jfms4mfsz3kk&client_secret=s5ofrZmokRVRN2ZC`,
    {
      grant_type: 'authorization_code',
      code: oauthCode,
      redirect_uri: `${window.location.protocol}//${window.location.host}/linkedin`,
      client_id: '78jfms4mfsz3kk',
      client_secret: 's5ofrZmokRVRN2ZC'
    },
    { dispatch }).then((response) => {
      console.log(response.data); 
      dispatch(gotToken(response.data));
      dispatch(getLIProfile(response.data.access_token));
    }, (error) => {
      console.log(error);
    });
  };
}

export function getLIProfile(token) {
  return function (dispatch) {
    return axios.get(`/lnk/people/~:(first-name,last-name,positions,picture-url,headline,location)?format=json`, { dispatch, headers: {
      Authorization: `Bearer ${token}`
    } }).then((response) => {
      console.log(response.data)
      dispatch(gotLIProfile(response.data));
    }, (error) => {
      console.log(error);
    });
  };
}