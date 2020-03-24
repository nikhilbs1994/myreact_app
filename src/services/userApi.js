import { login } from '../container/action/userAction';

const axios = require('axios');
const API = process.env.REACT_APP_API_BASE_URL;

export function authUser(dispatch, loginDetails) {
    const response = axios.post(API + "login?" + new URLSearchParams(loginDetails));
    return (dispatch) => {
        response.then( (res) => {
            if(res.data && res.data.status === "ok") {
                dispatch(login());
            }
        });
    }; 
}