import userReducer from './userReducer';
import deviceReducer from './deviceReducer';
import liveDataReducer from './liveDataReducer';
import {combineReducers} from 'redux';

const allReducer = combineReducers({
    user: userReducer,
    devices: deviceReducer,
    liveData: liveDataReducer
});

export default allReducer;
