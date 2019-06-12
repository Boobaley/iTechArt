import { CHANGE_EMAIL } from '../constants/action-types';

export const changeEmail = (text) => {
    return {
        type: CHANGE_EMAIL,
        text
    }
}