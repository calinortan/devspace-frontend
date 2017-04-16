import {
  GET_FRIEND_REQUESTS, LOADING_NOTIFIACTIONS,
  UNAUTH_USER, ACCEPT_FRIEND_REQUEST
} from '../actions/ActionTypes';
import _ from 'lodash';
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
    case ACCEPT_FRIEND_REQUEST:
      return {
        ...state,
        friendRequests: state.friendRequests.map((req) => {
          return req._id == action.payload._id ?
            _.assign({}, req, { status: action.payload.status }) : req;
        })
      }
  }
  return state;
}