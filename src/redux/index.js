import { combineReducers } from 'redux';
import { auth } from '../Core/onboarding/redux/auth';
import { chat } from '../Core/chat/redux';
import { userReports } from '../Core/user-reporting/redux';
import { dating } from './reducers';
import { avChat } from '../Core/avchat';
import { inAppPurchase } from '../Core/inAppPurchase/redux';
import { users } from '../Core/users/redux';

const AppReducer = combineReducers({
  auth,
  userReports,
  chat,
  dating,
  avChat,
  inAppPurchase,
  users,
});

export default AppReducer;
