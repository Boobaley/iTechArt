import { CHANGE_EMAIL, CHANGE_PASSWORD } from '../constants/actionTypes';

export const changeEmail = (text) => ({
    type: CHANGE_EMAIL,
    text
});

export const changePassword = (text) => ({
    type: CHANGE_PASSWORD,
    text
});