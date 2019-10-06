import {ADD_CLASS, CLEAR_ERRORS, DELETE_CLASS, GET_CLASS, GET_CLASSES, GET_ERRORS} from "./actionTypes";
import axios from "../../axios";

// Add class
export const addClass = classData => dispatch => {
    axios
        .post('class/add', [classData])
        .then(res =>
            dispatch({
                type: ADD_CLASS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response
            })
        )
};

// Get Classes
export const getClasses = () => dispatch => {
    axios
        .get('class/get')
        .then(res =>
            dispatch({
                type: GET_CLASSES,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_CLASSES,
                payload: null
            })
        )
};

// Get Class
export const getClass = id => dispatch => {
    axios
        .get(`class/get/${id}`)
        .then(res =>
            dispatch({
                type: GET_CLASS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_CLASS,
                payload: null
            })
        );
};

// Delete Class
export const deleteClass = id => dispatch => {
    axios
        .delete(`class/delete/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_CLASS,
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
