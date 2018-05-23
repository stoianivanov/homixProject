import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}

const logger = store => next => action => {
    console.groupCollapsed('*** Action logger ***')
    console.log('Old State: ', store.getState())
    console.log('Action: ', action)

    let result = next(action);

    console.log('New State: ', store.getState())
    console.groupEnd();
}

export default (reducer) => {
    const persistedReducer = persistReducer(persistConfig, reducer)
    const store = createStore(
        persistedReducer,
        composeWithDevTools(applyMiddleware(thunk, logger))
    )

    return store;
}