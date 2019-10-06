import {ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE} from '../actions/actionTypes';
import {updateObject} from "../../shared/utility";

const initialState = {
    flashMessages: [{id: 1, type: 'error', text: "This is error message"},
        {id: 2, type: 'success', text: "Student has been added Successfully"}],
    flashMessage: {id: 2, type: 'success', text: "Student has been added Successfully"},
    enabled: true,
    loading: false,
};

const deleteFlashMessage = (state, action) => {
    return updateObject(state, {flashMessage: {}, enabled: false});
};

const addFlashMessage = (state, action) => {
    return updateObject(state, {
        flashMessage: action.payload,
        flashMessages: [action.payload, ...state.flashMessages],
        enabled: true
    });
};

const flashMessageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FLASH_MESSAGE:
            return addFlashMessage(state, action);
        case DELETE_FLASH_MESSAGE:
            return deleteFlashMessage(state, action);
        default:
            return state;
    }
};

export default flashMessageReducer;