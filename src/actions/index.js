import axios from 'axios';
import { browserHistory } from 'react-router'
import { AUTH_USER, AUTH_ERROR, SUBMITTING_AUTH, UNAUTH_USER , CURRENT_USER, VIEW_USER} from './ActionTypes';

export function signInUser({ email, password }) {
  // redux-thunk allows our action creators to return a function instead of an object
  // the function will be called with the dispatch method from the store
  // this allows us to add logic in our action creator on what action to dispatch
  return (dispatch) => {
    dispatch(submittingForm(true));
    axios.post('https://young-springs-34209.herokuapp.com/api/v1/session', { email, password })
      .then(response => {
        dispatch(submittingForm(false));
        dispatch({ type: AUTH_USER });
        const {token, currentUser} = response.data
        localStorage.setItem('devspace:token', token);
        localStorage.setItem('devspace:currentUserId', currentUser._id);
        browserHistory.push('/');
      })
      .catch(() => {
        dispatch(submittingForm(false));
        dispatch(authError('Bad Login Info'));
      });
  }
}

export function getLoggedInUser() {
  return (dispatch) => {
    const currentUserId = localStorage.getItem('devspace:currentUserId');
    const token = localStorage.getItem('devspace:token')
    if (currentUserId == null || token == null) {
      dispatch(signOutUser());
    } else {
      axios.get(`https://young-springs-34209.herokuapp.com/api/v1/users/${currentUserId}`, {
        headers: {'Authorization': token}})
        .then(response => dispatch(currentUser(response.data)))
        .catch(() => dispatch(signOutUser()));
    }
  }
}

export function signOutUser() {
  localStorage.removeItem('devspace:token');
  localStorage.removeItem('devspace:currentUserId');
  return { type: UNAUTH_USER };
}

export function currentUser(user) {
  return {
    type: CURRENT_USER,
    payload: user
  }
}

export function viewUser(user) {
  return {
    type: VIEW_USER,
    payload: user
  }
}

export function authError(err) {
  return {
    type: AUTH_ERROR,
    payload: err
  }
}

function submittingForm(isSubmitting) {
  return {
    type: SUBMITTING_AUTH,
    payload: isSubmitting
  }
}

export function getCurrentProfileUser(userId) {
  return (dispatch) => {
    const loggedInUserId = localStorage.getItem('devspace:currentUserId');
    const token = localStorage.getItem('devspace:token');
    const currentUserId = userId || loggedInUserId;
    if (currentUserId == null) {
      dispatch(signOutUser());
    } else {
      axios.get(`https://young-springs-34209.herokuapp.com/api/v1/users/${currentUserId}`, {
        headers: {'Authorization': token}})
        .then(response => {
          dispatch(viewUser(response.data))
        })
        .catch(() => {
          dispatch(signOutUser())
        });
    }
  }
}