import { userConstants } from '@/_constants';
import { User, userService } from '@/_services/';
import { history } from '@/_helpers';
import { alertActions } from './alert.actions';

export const userActions = {
    login,
    logout,
    register,
};

function login(userName: string, password: string, from: Object) {
    return (dispatch: any) => {
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
            );
    };

    function request(user: User) {
        return { type: userConstants.LOGIN_REQUEST, user };
    }
    function success(user: User) {
        return { type: userConstants.LOGIN_SUCCESS, user };
    }
    function failure(error: any) {
        return { type: userConstants.LOGIN_FAILURE, error };
    }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user: User) {
    return (dispatch: any) => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => {
                    dispatch(success());
                    history.push('/login');
                    dispatch(alertActions.success('Registration Successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user: User) {
        return { type: userConstants.REGISTER_REQUEST, user };
    }
    function success(user?: User) {
        return { type: userConstants.REGISTER_SUCCESS, user };
    }
    function failure(error: any) {
        return { type: userConstants.REGISTER_FAILURE, error };
    }
}