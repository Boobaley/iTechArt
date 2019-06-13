import React from 'react';
import { connect } from 'react-redux';

const SuccessReduxForm = (props) => {
    const { inputs } = props;
    return (
        <div>
            <h1>Your Entire Data:</h1>
            <div>Your Email: {inputs.email}</div>
            <div>Your Password: {inputs.password}</div>
        </div>
    )
}

export default connect(state => ({
    inputs: state.inputs
}))(SuccessReduxForm);