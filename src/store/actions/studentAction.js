import {
    ADD_STUDENT,
    CLEAR_ERRORS,
    DELETE_STUDENT,
    GET_ERRORS,
    GET_STUDENT,
    GET_STUDENTS,
    UPDATE_STUDENT
} from "./actionTypes";
import axios from "../../axios";

// Add student
export const addStudent = studentData => dispatch => {
    axios
        .post('student/add', studentData)
        .then(res =>
            dispatch({
                type: ADD_STUDENT,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
};

// Update student
export const updateStudent = (id, studentData) => dispatch => {
    axios
        .post(`student/update/${id}`, studentData)
        .then(res =>
            dispatch({
                type: UPDATE_STUDENT,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
};

// Get Students
export const getStudents = () => dispatch => {
    axios
        .get('student/get')
        .then(res =>
            dispatch({
                type: GET_STUDENTS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_STUDENTS,
                payload: null
            })
        )
};

// Get Student
export const getStudent = id => dispatch => {
    axios
        .get(`student/get/${id}`)
        .then(res =>
            dispatch({
                type: GET_STUDENT,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_STUDENT,
                payload: null
            })
        );
};

// Delete Student
export const deleteStudent = id => dispatch => {
    axios
        .delete(`student/delete/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_STUDENT,
                payload: id
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

// Clear errors
export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS
    };
};
