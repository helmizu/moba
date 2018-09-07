import { baseUrl } from '../config'
import { DATA_INSERTED } from '../config/types';

export const insertPelatih = (userData) => dispatch => {
    axios.post(`${baseUrl}/data/headcoach`, userData)
    .then(res => dispatch({
        type : DATA_INSERTED,
        payload : res.data
    }))
    .catch(err => dispatch({
        type : GET_ERRORS,
        payload : err.response.data
    }));
}; 

export const insertManager = (userData) => dispatch => {
    axios.post(`${baseUrl}/data/manager`, userData)
    .then(res => dispatch({
        type : DATA_INSERTED,
        payload : res.data
    }))
    .catch(err => dispatch({
        type : GET_ERRORS,
        payload : err.response.data
    }));
}; 

export const insertMedis = (userData) => dispatch => {
    axios.post(`${baseUrl}/data/medis`, userData)
    .then(res => dispatch({
        type : DATA_INSERTED,
        payload : res.data
    }))
    .catch(err => dispatch({
        type : GET_ERRORS,
        payload : err.response.data
    }));
}; 

export const insertGuru = (userData) => dispatch => {
    axios.post(`${baseUrl}/data/guru`, userData)
    .then(res => dispatch({
        type : DATA_INSERTED,
        payload : res.data
    }))
    .catch(err => dispatch({
        type : GET_ERRORS,
        payload : err.response.data
    }));
}; 

export const insertPemain = (userData) => dispatch => {
    axios.post(`${baseUrl}/data/pemain`, userData)
    .then(res => dispatch({
        type : DATA_INSERTED,
        payload : res.data
    }))
    .catch(err => dispatch({
        type : GET_ERRORS,
        payload : err.response.data
    }));
}; 

