import {ADD_MARK, CLEAR_ERRORS, DELETE_MARK, GET_ERRORS, GET_MARK, GET_MARKS} from "./actionTypes";
import axios from "../../axios";

// Add mark
export const addMark = markData => dispatch => {
    axios
        .post('mark/add', markData)
        .then(res =>
            dispatch({
                type: ADD_MARK,
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

// Get Marks
export const getMarks = () => dispatch => {
    axios
        .get('mark/get')
        .then(res =>
            dispatch({
                type: GET_MARKS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_MARKS,
                payload: null
            })
        )
};

// Get Mark
export const getMark = id => dispatch => {
    axios
        .get(`mark/get/${id}`)
        .then(res =>
            dispatch({
                type: GET_MARK,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_MARK,
                payload: null
            })
        );
};

// Delete Mark
export const deleteMark = id => dispatch => {
    axios
        .delete(`mark/delete/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_MARK,
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
