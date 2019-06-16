import React, { Component } from 'react';
import ReduxFormLib from '../views/ReduxFormLib/ReduxFormLib';
import { withRouter } from 'react-router-dom';

class ReduxFormLibContainer extends Component {
    submit = (values) => {
        this.props.history.replace('/login-redux-form/success');
        return values;
    }
    
    render() {
        return (
            <ReduxFormLib 
                onSubmit={this.submit}
            />
        );
    }
}

export default withRouter(ReduxFormLibContainer);