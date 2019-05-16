import {combineReducers} from 'redux';
import classReducer from "./classReducer";
import studentReducer from "./studentReducer";
import examReducer from "./examReducer";
import markReducer from "./markReducer";

export default combineReducers({
    student: studentReducer,
    class: classReducer,
    exam: examReducer,
    mark: markReducer
});
