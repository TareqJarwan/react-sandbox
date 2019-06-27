import {LOCALE_SET} from "./actionTypes";

export const localeSet = (lang, direction) => ({
    type: LOCALE_SET,
    lang,
    direction
});

export const setLocale = (lang, direction) => dispatch => {
    localStorage.alhubLang = {lang: lang, direction: direction};
    dispatch(localeSet(lang, direction));
};
