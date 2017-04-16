import { combineReducers } from 'redux';
import { reducer as ReduxFormReducer } from 'redux-form';
import AuthReducer from './AuthReducer';
import ProfileReducer from './ProfileReducer';
import NotificationsReducer from './NotificationsReducer';

const rootReducer = combineReducers({
  form: ReduxFormReducer,
  auth: AuthReducer,
  profile: ProfileReducer,
  notifications: NotificationsReducer
});

export default rootReducer;
