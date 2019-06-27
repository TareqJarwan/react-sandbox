import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/lib/integration/react';

import {addLocaleData} from "react-intl";
import en from 'react-intl/locale-data/en';
import ar from 'react-intl/locale-data/ar';

import * as serviceWorker from './serviceWorker';
import store from "./store/store";

const persistor = persistStore(store);

addLocaleData(en);
addLocaleData(ar);

const app = (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </PersistGate>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
