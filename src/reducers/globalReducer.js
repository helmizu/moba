import { SET_CURRENT_USER, GET_ERRORS, SET_LOADING } from "../config/types";
import isEmpty from '../utils/isEmpty';

const initialState = {
    isLogedIn : true,
    user : {},
    errors : {},
    loading : false,
}

export default (state = initialState, action) => {
    switch (action.type) {

        case SET_CURRENT_USER:
        return { ...state, user : action.payload, isLogedIn : !isEmpty(action.payload) }

        case GET_ERRORS:
        return { ...state, errors : action.payload }

        case SET_LOADING:
        return { ...state, loading : action.payload }

        default:
        return state
    }
}
