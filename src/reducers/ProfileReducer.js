import _ from 'lodash';
import { VIEW_USER, CURRENT_USER, LOADING_PROFILE } from '../actions/ActionTypes'

const defaultState = {

}

export default (state = defaultState, action) => {
  switch (action.type) {
    case VIEW_USER:
      const isConnection = _.includes(state.loggedInUserConnections, action.payload._id);
      return { ...state, user: action.payload, isOwnProfile: action.isOwnProfile, isConnection };
    case CURRENT_USER:
      return {...state, loggedInUserConnections: action.payload.connections};
    case LOADING_PROFILE:
      return {...state, isLoadingProfile: action.payload};
  }
  return state;
}