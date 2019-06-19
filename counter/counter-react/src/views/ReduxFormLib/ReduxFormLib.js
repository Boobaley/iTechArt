import React from 'react';
import { input, form, formTitle, button, outputData } from './style';
import Button from '@material-ui/core/Button';
import { Field, reduxForm, formValueSelector  } from 'redux-form';
import { connect } from 'react-redux';

let ReduxFormLib = props => {
    const { handleSubmit, emailValue, passwordValue } = props
        return (
            <React.Fragment>
                <form style={form} onSubmit={handleSubmit}>
                    <div style={formTitle}>LOG IN WITH REDUX FORM</div>
                    <div>
                        <Field 
                            name="email"
                            component="input"
                            type="email" 
                            placeholder="Email" 
                            style={input}
                            required
                        />
                        <Field 
                            name="password"
                            component="input"
                            type="password" 
                            minLength="6"
                            placeholder="Password" 
                            style={input && input.lastOfType}
                            required
                        />
                    </div>
                    <Button type="submit" variant="outlined" color="primary" style={button}>Sign In</Button>
                </form>
    
                <div style={outputData}>
                    <div>User Email: {emailValue}</div>
                    <hr/>
                    <div>User Password: {passwordValue}</div>
                </div>
            </React.Fragment>
        );
    }

ReduxFormLib = reduxForm({
    form: 'login',
    destroyOnUnmount: false
})(ReduxFormLib);

const selector = formValueSelector('login');

ReduxFormLib = connect(
    state => {
        const emailValue = selector(state, 'email');
        const passwordValue = selector(state, 'password');
        return {
            emailValue,
            passwordValue
        }
    }
    
)(ReduxFormLib);


export default ReduxFormLib;