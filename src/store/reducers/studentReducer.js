import {
    ADD_STUDENT,
    DELETE_STUDENT,
    GET_STUDENT,
    GET_STUDENTS,
    STUDENT_LOADING,
    UPDATE_STUDENT
} from '../actions/actionTypes';
import {updateObject} from "../../shared/utility";

const initialState = {
    students: [],
    student: {},
    loading: false
};

const studentLoading = (state, action) => {
    return updateObject(state, {loading: true});
};

function getStudents(state, action) {
    return updateObject(state, {
        students: action.payload,
        loading: false
    });
}

function getStudent(state, action) {
    return updateObject(state, {
        student: action.payload,
        loading: false
    });
}

function addStudent(state, action) {
    return updateObject(state, {
        students: [action.payload, ...state.students],
    });
}

function updateStudent(state, action) {
    return updateObject(state, {
        students: [action.payload, ...state.students],
    });
}

function deleteStudent(state, action) {
    return updateObject(state, {
        students: state.students.filter(student => student._id !== action.payload),
    });
}

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case STUDENT_LOADING:
            return studentLoading(state, action);
        case GET_STUDENTS:
            return getStudents(state, action);
        case GET_STUDENT:
            return getStudent(state, action);
        case ADD_STUDENT:
            return addStudent(state, action);
        case UPDATE_STUDENT:
            return updateStudent(state, action);
        case DELETE_STUDENT:
            return deleteStudent(state, action);
        default:
            return state;
    }
};

export default studentReducer;
