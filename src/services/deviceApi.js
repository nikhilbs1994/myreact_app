import { updateDeviceCount, updateDeviceDetails } from '../container/action/deviceAction';

const axios = require('axios');
const API = process.env.REACT_APP_API_BASE_URL;
const urlParam = {
    userId: 'classic',
    authPassword: 'classic'
};

export function getDeviceCount(dispatch) {
    const response = axios.get(API + "device/count?" + new URLSearchParams(urlParam));
    return (dispatch) => {
        return response.then( (res) => {
            if(res.data && res.data.status === "ok") {
                dispatch(updateDeviceCount(res.data.data.deviceCount));
                return res.data.data.deviceCount;
            }
        });
    }; 
}

export function getDeviceDetails(dispatch, id) {
    const response = axios.get(API + "device/" + id +"?" + new URLSearchParams(urlParam));
    return (dispatch) => {
        return response.then( (res) => {
            if(res.data && res.data.status === "ok") {
                dispatch(updateDeviceDetails(res.data.data));
                return res.data.data;
            }
        });
    }; 
}