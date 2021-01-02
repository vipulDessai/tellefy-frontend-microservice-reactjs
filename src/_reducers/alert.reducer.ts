import { alertConstants } from '@/_constants';

interface AlertReducerAction {
    message: string;
    type: string;
}
interface AlertState {
    type?: string;
    message?: string;
}

export function alert(state: AlertState = {}, action: AlertReducerAction) {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return {
                type: 'alert-success',
                message: action.message
            };
        case alertConstants.ERROR:
            return {
                type: 'alert-danger',
                message: action.message
            };
        case alertConstants.CLEAR:
            return {};
        default: 
            return state;
    }
}