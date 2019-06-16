import React from 'react';
import { formValueSelector  } from 'redux-form';
import { connect } from 'react-redux';

let SuccessReduxFormLib = (props) => {
    const { emailValue, passwordValue } = props
    return (
        <div>
            <h1>Your Entire Data:</h1>
            <div>Your Email: {emailValue}</div>
            <div>Your Password: {passwordValue}</div>
        </div>
    )
}



const selector = formValueSelector('login');

SuccessReduxFormLib = connect(
    state => {
        const emailValue = selector(state, 'email');
        const passwordValue = selector(state, 'password');
        return {
            emailValue,
            passwordValue
        }
    })(SuccessReduxFormLib);

export default SuccessReduxFormLib;