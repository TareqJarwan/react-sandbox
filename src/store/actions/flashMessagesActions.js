import axios from "axios";
import {ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE, GET_ERRORS} from "./actionTypes";

export const addFlashMessage = data => dispatch => {
    axios
        .post('class/add', data)
        .then(res =>
            dispatch({
                type: ADD_FLASH_MESSAGE,
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

export const deleteFlashMessage = data => dispatch => {
    axios
        .post('class/add', data)
        .then(res =>
            dispatch({
                type: DELETE_FLASH_MESSAGE,
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