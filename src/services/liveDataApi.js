import { updateDashboardData } from '../container/action/liveDataAction';

const axios = require('axios');
const API = process.env.REACT_APP_API_BASE_URL;
const urlParam = {
    userId: 'classic',
    authPassword: 'classic'
};

export function getDashboardData(dispatch, options) {
    const response = axios.get(API + "device/sensor/livedata/?" +
        new URLSearchParams(Object.assign(urlParam, options)));
    
    return (dispatch) => {
        return response.then( (res) => {
            if(res.data && res.data.status === "ok") {
                dispatch(updateDashboardData(res.data.data));
                return res.data.data.liveDataPerDeviceId[0].dataList;
            }
        });
    }; 
}