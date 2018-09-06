import { SET_CURRENT_USER, GET_ERRORS, IS_LOGGED_IN } from "../config/types";

const initialState = {
    isLogedIn : false,
    user : {},
    errors : {}
}

export default (state = initialState, action) => {
    switch (action.type) {

        case IS_LOGGED_IN:
        return { ...state, isLogedIn : action.payload }
        
        case SET_CURRENT_USER:
        return { ...state, user : action.payload }

        case GET_ERRORS:
        return { ...state, errors : action.payload }

        default:
        return state
    }
}
