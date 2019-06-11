import React from 'react';
import { input, form, formTitle, button } from './style';
import Button from '@material-ui/core/Button';

const ReduxForm = (props) => {
    return (
        <React.Fragment>
            <form style={form} onSubmit={props.submit}>
                <div style={formTitle}>LOG IN WITH REDUX</div>
                <div>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        style={input}
                        required
                    />
                    <input 
                        type="password" 
                        minLength="6"
                        placeholder="Password" 
                        style={input && input.lastOfType}
                        required
                    />
                </div>
                <Button type="submit" variant="outlined" color="primary" style={button}>Sign In</Button>
            </form>
        </React.Fragment>
    );
  }

export default ReduxForm;