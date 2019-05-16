import {ADD_EXAM, DELETE_EXAM, EXAM_LOADING, GET_EXAM, GET_EXAMS, UPDATE_EXAM} from '../actions/actionTypes';
import {updateObject} from "../../shared/utility";

const initialState = {
    exams: [],
    exam: {},
    loading: false
};

const examLoading = (state, action) => {
    return updateObject(state, {loading: true});
};

function getExams(state, action) {
    return updateObject(state, {
        exams: action.payload,
        loading: false
    });
}

function getExam(state, action) {
    return updateObject(state, {
        exam: action.payload,
        loading: false
    });
}

function addExam(state, action) {
    return updateObject(state, {
        exams: [action.payload, ...state.exams],
    });
}

function updateExam(state, action) {
    return updateObject(state, {
        exams: [action.payload, ...state.exams],
    });
}

function deleteExam(state, action) {
    return updateObject(state, {
        exams: state.exams.filter(exam => exam._id !== action.payload),
    });
}

const examReducer = (state = initialState, action) => {
    switch (action.type) {
        case EXAM_LOADING:
            return examLoading(state, action);
        case GET_EXAMS:
            return getExams(state, action);
        case GET_EXAM:
            return getExam(state, action);
        case ADD_EXAM:
            return addExam(state, action);
        case UPDATE_EXAM:
            return updateExam(state, action);
        case DELETE_EXAM:
            return deleteExam(state, action);
        default:
            return state;
    }
};

export default examReducer;
