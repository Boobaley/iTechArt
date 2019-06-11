import React from 'react';
import { input, form, formTitle, button, outputData } from './style';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { changeEmailInput } from '../../actions/actionCreator';


const ReduxForm = (props) => {
    const { inputs } = props;
    console.log(inputs)
    return (
        <React.Fragment>
            <form style={form}>
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
            <div style={outputData}>
                <div>User Email: {inputs}</div>
                <hr/>
                <div>User Password:</div>
            </div>
        </React.Fragment>
    );
  }

export default connect(state => ({
    inputs: state.inputs
}), { changeEmailInput })(ReduxForm);