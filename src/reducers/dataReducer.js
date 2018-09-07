import { DATA_INSERTED, GET_PELATIH, GET_MANAGER, GET_MEDIS, GET_GURU, GET_PEMAIN, GET_ERRORS } from "../config/types";

const initialState = {
    success : {},
    pelatih : {},
    manager : {},
    medis : {},
    guru : {},
    pemain : [],
    error : {}
}

export default (state = initialState, action) => {
    switch (action.type) {
    
        case DATA_INSERTED:
        return { ...state, success : action.payload }
        
        case GET_PELATIH:
        return { ...state, pelatih : action.payload }
        
        case GET_MANAGER:
        return { ...state, manager : action.payload }
        
        case GET_MEDIS:
        return { ...state, medis : action.payload }
        
        case GET_GURU:
        return { ...state, guru : action.payload }
        
        case GET_PEMAIN:
        return { ...state, pemain : action.payload }
        
        case GET_ERRORS:
        return { ...state, error : action.payload }

        default:
        return state
    }
}
