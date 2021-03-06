import React, { Component } from 'react';
import Form from '../views/Form/Form';

class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    onHandleSubmit = (event) => {
        event.preventDefault();
        console.log(`User Email: ${this.state.email}  User Password: ${this.state.password}`);
        this.setState({email: '', password: ''});
        alert(JSON.stringify(this.state));
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    render() {
        return (
            <Form 
                email={this.onEmailChange}
                emailOutput={this.state.email} 
                password={this.onPasswordChange} 
                passwordOutput={this.state.password}
                submit={this.onHandleSubmit}
            />
        );
    }
}

export default FormContainer;