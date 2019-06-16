import React, { Component } from 'react';
import ReduxForm from '../views/ReduxForm/ReduxForm';
import { connect } from 'react-redux';
import { changeEmail, changePassword } from '../actions/actionCreator';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state => ({
    inputs: state.inputs
}));

class ReduxFormContainer extends Component { 

    handleEmailChange = (event) => {
        const { changeEmail } = this.props;
        changeEmail(event.target.value);
    }

    handlePasswordChange = (event) => {
        const { changePassword } = this.props;
        changePassword(event.target.value);
    }

    onHandleSubmit = (event) => {
        event.preventDefault();
        this.props.history.replace('/login-redux/success');
    }
    render() {
        const { inputs } = this.props;
        
        return (
            <ReduxForm 
                emailInputChange={this.handleEmailChange}
                passwordInputChange={this.handlePasswordChange}
                emailOutput={inputs.email}
                passwordOutput={inputs.password}
                onSubmit={this.onHandleSubmit}
            />
        );
    }
}

export default withRouter(connect(mapStateToProps, {changeEmail, changePassword})(ReduxFormContainer));