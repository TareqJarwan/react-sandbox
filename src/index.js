import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Modal from 'react-modal';

import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import * as serviceWorker from './serviceWorker';
import store from "./store/store";

Modal.setAppElement('#root');

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
