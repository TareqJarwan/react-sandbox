import {ADD_CLASS, CLASS_LOADING, DELETE_CLASS, GET_CLASS, GET_CLASSES} from '../actions/actionTypes';
import {updateObject} from "../../shared/utility";

const initialState = {
    classes: [],
    class: {},
    loading: false,
    message: ""
};

const classLoading = (state, action) => {
    return updateObject(state, {loading: true});
};

function getClasses(state, action) {
    return updateObject(state, {
        classes: action.payload.data,
        message: action.payload.status,
        loading: false
    });
}

function getClass(state, action) {
    return updateObject(state, {
        class: action.payload,
        loading: false
    });
}

function addClass(state, action) {
    return updateObject(state, {
        classes: [action.payload, ...state.classs],
    });
}

function deleteClass(state, action) {
    return updateObject(state, {
        classes: state.classes.filter(item => item._id !== action.payload),
    });
}

const classReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLASS_LOADING:
            return classLoading(state, action);
        case GET_CLASSES:
            return getClasses(state, action);
        case GET_CLASS:
            return getClass(state, action);
        case ADD_CLASS:
            return addClass(state, action);
        case DELETE_CLASS:
            return deleteClass(state, action);
        default:
            return state;
    }
};

export default classReducer;
