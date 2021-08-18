import { AUTH_FAIL, AUTH_FAIL_RESET, AUTH_LOGOUT, AUTH_SUCCESS } from "../actions/actionTypes"

const initialState = {
    token: null,
    isAuthFailed: false
}

export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                token: action.token
            }
        case AUTH_LOGOUT:
            return {
                ...state,
                token: null
            }
        case AUTH_FAIL:
            return {
                ...state,
                isAuthFailed: true
            }
        case AUTH_FAIL_RESET:
            return {
                ...state,
                isAuthFailed: false
            }
        default:
            return state
    }
}