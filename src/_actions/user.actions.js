import { userConstants } from "../_constants";
import { userService } from "../_services/user.service";
import { history } from '../_helpers';
import { alertActions } from './alert.actions';

export const userActions = {
    login,
    logout,
    register,
}

function login(userName, password, from) {
    return dispatch => {
        dispatch(request({userName}));

        userService.login(userName, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push(from);
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            )
    }

    function request(user) {
        return { type: userConstants.LOGIN_REQUEST, user }
    }
    function success(user) {
        return { type: userConstants.LOGIN_SUCCESS, user }
    }
    function failure(error) {
        return { type: userConstants.LOGIN_FAILURE, error }
    }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => {
                    dispatch(success());
                    history.push("/login");
                    dispatch(alertActions.success('Registration Successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            )
    }

    function request(user) {
        return { type: userConstants.REGISTER_REQUEST, user }
    }
    function success(user) {
        return { type: userConstants.REGISTER_SUCCESS, user }
    }
    function failure(error) {
        return { type: userConstants.REGISTER_FAILURE, user }
    }
}