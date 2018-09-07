import { SET_CURRENT_USER, GET_ERRORS } from "../config/types";
import isEmpty from '../utils/isEmpty';

const initialState = {
    isLogedIn : true,
    user : {},
    errors : {}
}

export default (state = initialState, action) => {
    switch (action.type) {

        case SET_CURRENT_USER:
        return { ...state, user : action.payload, isLogedIn : !isEmpty(action.payload) }

        case GET_ERRORS:
        return { ...state, errors : action.payload }

        default:
        return state
    }
}
