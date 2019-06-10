import React from 'react';
import { input, form, formTitle, button, outputData } from './style';
import Button from '@material-ui/core/Button';

const Form = (props) => {
    return (
        <React.Fragment>
            <form action="" style={form} onSubmit={props.submit}>
                <div style={formTitle}>LOG IN</div>
                <div>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        style={input}
                        onChange={props.email}
                        value={props.emailOutput}
                        required
                    />
                    <input 
                        type="password" 
                        minLength="6"
                        placeholder="Password" 
                        style={input && input.lastOfType}
                        onChange={props.password}
                        value={props.passwordOutput}
                        required
                    />
                </div>
                <Button type="submit" variant="outlined" color="primary" style={button}>Sign In</Button>
            </form>
            <div style={outputData}>
                <div>User Email: {props.emailOutput}</div>
                <hr/>
                <div>User Password: {props.passwordOutput}</div>
            </div>
        </React.Fragment>
    );
  }

export default Form;