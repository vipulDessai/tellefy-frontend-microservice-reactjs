import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../_reducers';

const loggerMiddleware = createLogger();
const applyMidlewareRef = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
);

export const store = createStore(
    rootReducer,
    NODE_ENV == 'development' ? composeWithDevTools(applyMidlewareRef) : applyMidlewareRef,
);