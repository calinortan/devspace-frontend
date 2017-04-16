import _ from 'lodash';
import { VIEW_USER, CURRENT_USER, LOADING_PROFILE, SET_PENDING_REQUEST } from '../actions/ActionTypes'

const defaultState = {

}

export default (state = defaultState, action) => {
  switch (action.type) {
    case VIEW_USER:
      return {
        ...state,
        user: action.payload,
        isOwnProfile: action.isOwnProfile,
        isConnection: _.includes(state.loggedInUserConnections, action.payload._id)
      };
    case CURRENT_USER:
      return {...state, loggedInUserConnections: action.payload.connections};
    case LOADING_PROFILE:
      return {...state, isLoadingProfile: action.payload};
    case SET_PENDING_REQUEST:
      return {...state, pendingRequest: action.payload};
  }
  return state;
}
