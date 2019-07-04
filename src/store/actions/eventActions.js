import {ADD_EVENT, CLEAR_ERRORS, DELETE_EVENT, GET_ERRORS, GET_EVENT, GET_EVENTS, UPDATE_EVENT} from "./actionTypes";
import axios from "../../axios";

// Add event
export const addEvent = eventData => dispatch => {
    axios
        .post('event/add', eventData)
        .then(res =>
            dispatch({
                type: ADD_EVENT,
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

// Update Event
export const updateEvent = (id, eventData) => dispatch => {
    axios
        .post(`event/update/${id}`, eventData)
        .then(res =>
            dispatch({
                type: UPDATE_EVENT,
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

// Get Events
export const getEvents = () => dispatch => {
    axios
        .get('event/get')
        .then(res =>
            dispatch({
                type: GET_EVENTS,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_EVENTS,
                payload: null
            })
        )
};

// Get Event
export const getEvent = id => dispatch => {
    axios
        .get(`event/get/${id}`)
        .then(res =>
            dispatch({
                type: GET_EVENT,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_EVENT,
                payload: null
            })
        );
};

// Delete Event
export const deleteEvent = id => dispatch => {
    axios
        .delete(`event/delete/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_EVENT,
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
