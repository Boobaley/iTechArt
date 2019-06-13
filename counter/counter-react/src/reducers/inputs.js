import { CHANGE_EMAIL, CHANGE_PASSWORD } from '../constants/actionTypes';

const initialState = {
    email: '',
    password: ''
}
const inputs = (state = initialState, {text, type}) => {
    switch(type) {
        case CHANGE_EMAIL:
            return Object.assign({}, state, {
                email: text,
                password: state.password
            });
        case CHANGE_PASSWORD:
            return Object.assign({}, state, {
                email: state.email,
                password: text
            })
        default:
            return state;
    } 
}

export default inputs;