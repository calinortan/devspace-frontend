import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, SUBMITTING_AUTH } from '../actions/ActionTypes'
const defaultState = {
  isSubmittingAuth: false
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: true };
    case UNAUTH_USER:
      return { ...state, authenticated: false };
    case AUTH_ERROR:
      return { ...state, error: action.payload };
    case SUBMITTING_AUTH:
      return { ...state, isSubmittingAuth: action.payload };
  }
  return state;
}