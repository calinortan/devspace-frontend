import axios from 'axios';
import { browserHistory } from 'react-router'
import { AUTH_USER, AUTH_ERROR } from './ActionTypes';

export function signInUser({ email, password }) {
  // redux-thunk allows our action creators to return a function instead of an object
  // the function will be called with the dispatch method from the store
  // this allows us to add logic in our action creator on what action to dispatch
  return (dispatch) => {
    axios.post('https://young-springs-34209.herokuapp.com/api/v1/session', { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });

        localStorage.setItem('devspace:token', response.data.token);

        browserHistory.push('/');
      })
      .catch(() => {
        dispatch(authError('Bad Login Info'));
      })
  }
}

export function authError(err) {
  return {
    type: AUTH_ERROR,
    payload: err
  }
}