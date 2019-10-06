import {LOCALE_SET} from "../actions/actionTypes";

const initialState = {
    lang: "en",
    direction: 'ltr'
};

const locale = (state = initialState, action = {}) => {
    if (action.type === LOCALE_SET) {
        return {lang: action.lang, direction: action.direction};
    } else {
        return state;
    }
};

export default locale;
