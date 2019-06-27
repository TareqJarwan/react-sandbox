import {combineReducers} from 'redux';
import classReducer from "./classReducer";
import studentReducer from "./studentReducer";
import examReducer from "./examReducer";
import markReducer from "./markReducer";
import localeReducer from "./localeReducer";

export default combineReducers({
    student: studentReducer,
    class: classReducer,
    exam: examReducer,
    mark: markReducer,
    locale: localeReducer
});
