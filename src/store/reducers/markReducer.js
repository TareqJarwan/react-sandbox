import {ADD_MARK, DELETE_MARK, GET_MARK, GET_MARKS, MARK_LOADING} from '../actions/actionTypes';
import {updateObject} from "../../shared/utility";

const initialState = {
    marks: [],
    mark: {},
    loading: false
};

const markLoading = (state, action) => {
    return updateObject(state, {loading: true});
};

function getMarks(state, action) {
    return updateObject(state, {
        marks: action.payload,
        loading: false
    });
}

function getMark(state, action) {
    return updateObject(state, {
        mark: action.payload,
        loading: false
    });
}

function addMark(state, action) {
    return updateObject(state, {
        marks: [action.payload, ...state.marks],
    });
}

function deleteMark(state, action) {
    return updateObject(state, {
        marks: state.marks.filter(mark => mark._id !== action.payload),
    });
}

const markReducer = (state = initialState, action) => {
    switch (action.type) {
        case MARK_LOADING:
            return markLoading(state, action);
        case GET_MARKS:
            return getMarks(state, action);
        case GET_MARK:
            return getMark(state, action);
        case ADD_MARK:
            return addMark(state, action);
        case DELETE_MARK:
            return deleteMark(state, action);
        default:
            return state;
    }
};

export default markReducer;
