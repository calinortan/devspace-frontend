import { GET_FRIEND_REQUESTS, LOADING_NOTIFIACTIONS, UNAUTH_USER } from '../actions/ActionTypes'
const defaultState = {
  loadingNotifications: false
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_FRIEND_REQUESTS:
      return { ...state, friendRequests: action.payload };
    case LOADING_NOTIFIACTIONS:
      return { ...state, loadingNotifications: action.payload };
    case UNAUTH_USER:
      return { ...state, friendRequests: null }
  }
  return state;
}