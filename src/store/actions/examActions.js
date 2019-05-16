import {ADD_EXAM, CLEAR_ERRORS, DELETE_EXAM, GET_ERRORS, GET_EXAM, GET_EXAMS, UPDATE_EXAM} from "./actionTypes";
import axios from "../../axios";

// Add exam
export const addExam = examData => dispatch => {
    axios
        .post('exam/add', examData)
        .then(res =>
            dispatch({
                type: ADD_EXAM,
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

// Update Exam
export const updateExam = (id, examData) => dispatch => {
    axios
        .post(`exam/update/${id}`, examData)
        .then(res =>
            dispatch({
                type: UPDATE_EXAM,
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

// Get Exams
export const getExams = () => dispatch => {
    axios
        .get('exam/get')
        .then(res =>
            dispatch({
                type: GET_EXAMS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_EXAMS,
                payload: null
            })
        )
};

// Get Exam
export const getExam = id => dispatch => {
    axios
        .get(`exam/get/${id}`)
        .then(res =>
            dispatch({
                type: GET_EXAM,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_EXAM,
                payload: null
            })
        );
};

// Delete Exam
export const deleteExam = id => dispatch => {
    axios
        .delete(`exam/delete/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_EXAM,
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
