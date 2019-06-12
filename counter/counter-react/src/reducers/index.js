import { CHANGE_EMAIL } from '../constants/action-types';

const initialState = {
    emailInput: '',
    passwordInput: ''
}

const rootReducer = (state = initialState, action) => {
    if (action.type === CHANGE_EMAIL) {
        return Object.assign({}, state, {
            emailInput: state.emailInput = action.text
        });
    }
};

export default rootReducer;