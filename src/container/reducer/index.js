import userReducer from './userReducer';
import deviceReducer from './deviceReducer';
import {combineReducers} from 'redux';

const allReducer = combineReducers({
    user: userReducer,
    devices: deviceReducer
});

export default allReducer;
