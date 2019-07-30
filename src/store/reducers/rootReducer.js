import {combineReducers} from 'redux';
import {firebaseReducer} from "react-redux-firebase";

import classReducer from "./classReducer";
import studentReducer from "./studentReducer";
import examReducer from "./examReducer";
import markReducer from "./markReducer";
import localeReducer from "./localeReducer";
import eventReducer from "./eventReducer";
import authReducer from "./authReducer";

export default combineReducers({
    auth: authReducer,
    student: studentReducer,
    class: classReducer,
    exam: examReducer,
    mark: markReducer,
    event: eventReducer,
    locale: localeReducer,
    firebase: firebaseReducer
});
