import React from 'react';
import ParentContainer from '../../containers/ParentContainer';
import Tabs from '../Tabs/Tabs';
import { HashRouter, Switch, Route } from 'react-router-dom';
import About from '../About/About';
import Error from '../Error/Error';
import FormContainer from '../../containers/FormContainer';
import ReduxFormContainer from '../../containers/ReduxFormContainer';

const Routes = () => {
    return (
        <HashRouter>
            <div> 
                <Switch>
                    <Route 
                        exact
                        path='/'
                        render={() =>
                            <div>
                                <Tabs current={null}/>
                            </div>
                        }
                    />
                    <Route 
                        path='/about'
                        render={() =>
                            <div>
                                <Tabs current={0}/>
                                <About/>
                            </div>
                        }
                    />
                    <Route 
                        path='/counters'
                        render={() =>
                            <div>
                                <Tabs current={1}/>
                                <ParentContainer/>
                            </div>
                        }
                    />
                    <Route 
                        path='/login'
                        render={() =>
                            <div>
                                <Tabs current={2}/>
                                <FormContainer/>
                            </div>
                        }
                    />
                    <Route 
                        path='/login-redux'
                        render={() =>
                            <div>
                                <Tabs current={3}/>
                                <ReduxFormContainer/>
                            </div>
                        }
                    />
                    <Route path='*' render={() =>
                        <Error/>
                    }/> 
                </Switch>
            </div>
        </HashRouter>
    );
}


export default Routes;