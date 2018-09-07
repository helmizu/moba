import { baseUrl } from '../config'
import { DATA_INSERTED, GET_PEMAIN, GET_GURU, GET_MEDIS, GET_MANAGER, GET_PELATIH, GET_SYARAT, GET_ERRORS, VALUE_UPDATE } from '../config/types';
import axios from 'axios'

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

export const insertManajer = (userData) => dispatch => {
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

export const loadData = (sekolah) => dispatch => {
    axios.get(`${baseUrl}/data/headcoach/${sekolah}`)
    .then(res => dispatch({
        type : GET_PELATIH,
        payload : res.data
    }))
    .catch(err => dispatch({
        type : GET_ERRORS,
        payload : err.response.data
    }));
    axios.get(`${baseUrl}/data/manager/${sekolah}`)
    .then(res => dispatch({
        type : GET_MANAGER,
        payload : res.data
    }))
    .catch(err => dispatch({
        type : GET_ERRORS,
        payload : err.response.data
    }));
    axios.get(`${baseUrl}/data/medis/${sekolah}`)
    .then(res => dispatch({
        type : GET_MEDIS,
        payload : res.data
    }))
    .catch(err => dispatch({
        type : GET_ERRORS,
        payload : err.response.data
    }));
    axios.get(`${baseUrl}/data/guru/${sekolah}`)
    .then(res => dispatch({
        type : GET_GURU,
        payload : res.data
    }))
    .catch(err => dispatch({
        type : GET_ERRORS,
        payload : err.response.data
    }));
    axios.get(`${baseUrl}/data/pemain/${sekolah}`)
    .then(res => dispatch({
        type : GET_PEMAIN,
        payload : res.data
    }))
    .catch(err => dispatch({
        type : GET_ERRORS,
        payload : err.response.data
    }));
    axios.get(`${baseUrl}/data/syarat/${sekolah}`)
    .then(res => dispatch({
        type : GET_SYARAT,
        payload : res.data
    }))
    .catch(err => dispatch({
        type : GET_ERRORS,
        payload : err.response.data
    }));
}; 

export const loadDetail = (namaForm, sekolah) => dispatch => {
    if(namaForm === "Pelatih") {
        axios.get(`${baseUrl}/data/headcoach/${sekolah}`)
        .then(res => dispatch({
            type : VALUE_UPDATE,
            payload : res.data
        }))
        .catch(err => dispatch({
            type : GET_ERRORS,
            payload : err.response.data
        }));
    } else if (namaForm === "Manajer") {
        axios.get(`${baseUrl}/data/manager/${sekolah}`)
        .then(res => dispatch({
            type : VALUE_UPDATE,
            payload : res.data
        }))
        .catch(err => dispatch({
            type : GET_ERRORS,
            payload : err.response.data
        }));
    } else if (namaForm === "Medis") {
        axios.get(`${baseUrl}/data/medis/${sekolah}`)
        .then(res => dispatch({
            type : VALUE_UPDATE,
            payload : res.data
        }))
        .catch(err => dispatch({
            type : GET_ERRORS,
            payload : err.response.data
        }));
    } else if (namaForm === "Guru") {
        axios.get(`${baseUrl}/data/guru/${sekolah}`)
        .then(res => dispatch({
            type : VALUE_UPDATE,
            payload : res.data
        }))
        .catch(err => dispatch({
            type : GET_ERRORS,
            payload : err.response.data
        }));
    }
}; 

export const loadPemain = (id) => dispatch => {
    axios.get(`${baseUrl}/data/pemain/detail/${id}`)
    .then(res => dispatch({
        type : VALUE_UPDATE,
        payload : res.data
    }))
    .catch(err => dispatch({
        type : GET_ERRORS,
        payload : err.response.data
    }));
}

export const updatePelatih = (id, userData) => dispatch => {
    axios.put(`${baseUrl}/data/headcoach/${id}`, userData)
    .then(res => dispatch({
        type : DATA_INSERTED,
        payload : res.data
    }))
    .catch(err => dispatch({
        type : GET_ERRORS,
        payload : err.response.data
    }));
}; 

export const updateManajer = (id, userData) => dispatch => {
    axios.put(`${baseUrl}/data/manager/${id}`, userData)
    .then(res => dispatch({
        type : DATA_INSERTED,
        payload : res.data
    }))
    .catch(err => dispatch({
        type : GET_ERRORS,
        payload : err.response.data
    }));
}; 

export const updateMedis = (id, userData) => dispatch => {
    axios.put(`${baseUrl}/data/medis/${id}`, userData)
    .then(res => dispatch({
        type : DATA_INSERTED,
        payload : res.data
    }))
    .catch(err => dispatch({
        type : GET_ERRORS,
        payload : err.response.data
    }));
}; 

export const updateGuru = (id, userData) => dispatch => {
    axios.put(`${baseUrl}/data/guru/${id}`, userData)
    .then(res => dispatch({
        type : DATA_INSERTED,
        payload : res.data
    }))
    .catch(err => dispatch({
        type : GET_ERRORS,
        payload : err.response.data
    }));
}; 

export const updatePemain = (id, userData) => dispatch => {
    axios.put(`${baseUrl}/data/pemain/${id}`, userData)
    .then(res => dispatch({
        type : DATA_INSERTED,
        payload : res.data
    }))
    .catch(err => dispatch({
        type : GET_ERRORS,
        payload : err.response.data
    }));
};

export const insertSyarat = (data) => dispatch => {
    axios.post(`${baseUrl}/data/syarat`, data)
    .then(res => dispatch({
        type : DATA_INSERTED,
        payload : res.data
    }))
    .catch(err => dispatch({
        type : GET_ERRORS,
        payload : err.response.data
    }));
}
