import {applyMiddleware, compose, createStore} from "redux";
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';
import {getFirestore, reduxFirestore} from "redux-firestore";
import {getFirebase, reactReduxFirebase} from "react-redux-firebase";

import fbConfig from "../config/fbConfig";

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const persistConfig = {
    key: 'root',
    storage: storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeEnhancers(
        applyMiddleware(thunk.withExtraArgument({getFirestore, getFirebase})),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig, {attachAuthIsReady: false, useFirestoreForProfile: true, userProfile: 'users'})
    )
);

export default store;
