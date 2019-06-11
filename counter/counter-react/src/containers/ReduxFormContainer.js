import React, { Component } from 'react';
import ReduxForm from '../views/ReduxForm/ReduxForm';
import { Provider } from 'react-redux';
import store from '../store';
class ReduxFormContainer extends Component {
    render() {
        return (
            <Provider store={store}>
                <ReduxForm />
            </Provider> 
        );
    }
}

export default ReduxFormContainer;