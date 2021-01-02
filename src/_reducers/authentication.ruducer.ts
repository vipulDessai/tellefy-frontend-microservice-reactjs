import { userConstants } from '@/_constants';
import { User } from "@/_services";

interface AuthenticationAction {
    type: string;
    user: User;
}

let user:User = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggingIn: true, user } : {};

export function authentication(state = initialState, action: AuthenticationAction) {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggingIn: true,
                user: action.user
            };
        case userConstants.LOGIN_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {};
        default:
            return state;
    }
}