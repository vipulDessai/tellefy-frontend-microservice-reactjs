import { userConstants } from '@/_constants';

interface RegistrationState {
    registering?: boolean;
}
interface RegistrationAction {
    type: string;
}

export function registration(state: RegistrationState = {}, action: RegistrationAction) {
    switch (action.type) {
        case userConstants.REGISTER_REQUEST:
            return {registering: true};
        case userConstants.REGISTER_SUCCESS:
            return {};
        case userConstants.REGISTER_FAILURE:
                return {};
        default:
            return state;
    }
}