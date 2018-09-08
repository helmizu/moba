import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER, SET_LOADING } from '../config/types';
import { baseUrl } from '../config';

export const registerUser = (userData, history) => dispatch => {
    dispatch(setLoading(true))
    axios.post(`${baseUrl}/users/register`, userData)
    .then(res => {
        dispatch(setLoading(false))
        history.push('/login')
    })
    .catch(err => {
        dispatch({
            type : GET_ERRORS,
            payload : err.response.data
        })
        window.alert(err.response.data.err)
    });
};

export const loginUser = (userData) => dispatch => {
    dispatch(setLoading(true))
    axios.post(`${baseUrl}/users/login`, userData)
    .then(res => {
        dispatch(setLoading(false))
        const { token } = res.data;
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

export const setLoading = (condition) => {
    return {
        type : SET_LOADING,
        payload : condition,
    }
}

export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwToken');
    dispatch(setCurrentUser({}));
};