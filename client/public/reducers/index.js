import { combineReducers } from 'redux';
import { campaigns } from './campaigns.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  campaigns,
  alert,
});

export default rootReducer;
