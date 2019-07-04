import {ADD_EVENT, DELETE_EVENT, EVENT_LOADING, GET_EVENT, GET_EVENTS, UPDATE_EVENT} from '../actions/actionTypes';
import {updateObject} from "../../shared/utility";

const initialState = {
    events: [],
    event: {},
    loading: false
};

const eventLoading = (state, action) => {
    return updateObject(state, {loading: true});
};

function getEvents(state, action) {
    return updateObject(state, {
        events: action.payload,
        loading: false
    });
}

function getEvent(state, action) {
    return updateObject(state, {
        event: action.payload,
        loading: false
    });
}

function addEvent(state, action) {
    return updateObject(state, {
        events: [action.payload, ...state.events],
    });
}

function updateEvent(state, action) {
    return updateObject(state, {
        events: [action.payload, ...state.events],
    });
}

function deleteEvent(state, action) {
    return updateObject(state, {
        events: state.events.filter(event => event._id !== action.payload),
    });
}

const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case EVENT_LOADING:
            return eventLoading(state, action);
        case GET_EVENTS:
            return getEvents(state, action);
        case GET_EVENT:
            return getEvent(state, action);
        case ADD_EVENT:
            return addEvent(state, action);
        case UPDATE_EVENT:
            return updateEvent(state, action);
        case DELETE_EVENT:
            return deleteEvent(state, action);
        default:
            return state;
    }
};

export default eventReducer;
