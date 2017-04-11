import { VIEW_USER } from '../actions/ActionTypes'

const defaultState = {

}

export default (state = defaultState, action) => {
  switch (action.type) {
    case VIEW_USER:
      return { ...state, user: action.payload };
  }
  return state;
}