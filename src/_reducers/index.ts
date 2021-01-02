import { combineReducers } from 'redux';

import { alert } from './alert.reducer';
import { authentication } from './authentication.ruducer';
import { users } from './users.reducer';
import { registration } from './registration.reducer';

const rootReducer = combineReducers({
    alert,
    authentication,
    users,
    registration,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;