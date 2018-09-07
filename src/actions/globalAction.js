import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER } from '../config/types';
import { baseUrl } from '../config';

export const registerUser = (userData, history) => dispatch => {
    axios.post(`${baseUrl}/users/register`, userData)
    .then(res => history.push('/login'))
    .catch(err => {
        dispatch({
            type : GET_ERRORS,
            payload : err.response.data
        })
        window.alert(err.response.data.err)
    });
};

export const loginUser = (userData) => dispatch => {
    axios.post(`${baseUrl}/users/login`, userData)
    .then(res => {
        const { token } = res.data;
        setAuthToken(token);
        localStorage.setItem('jwToken', token);
        const user = jwt_decode(token);
        dispatch(setCurrentUser(user));
    })
    .catch(err => dispatch({
        type : GET_ERRORS,
        payload : err.response.data
    }));
}; 

export const setCurrentUser = (user) => {
    return {
        type : SET_CURRENT_USER,
        payload : user
    };
};

export const logoutUser = () => dispatch => {
    setAuthToken(false);
    localStorage.removeItem('jwToken');
    dispatch(setCurrentUser({}));
};

export const setAuthToken = token => {
    if(token) {
        axios.defaults.headers.common['Authorization'] = token
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
};
