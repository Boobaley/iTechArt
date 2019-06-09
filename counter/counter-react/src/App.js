import React from 'react';
import './App.css';
import ParentContainer from './containers/ParentContainer';
import Tabs from './views/Tabs/Tabs';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './views/About/About';
import Error from './views/Error/Error';


const App = () => {
  return (
    <BrowserRouter>
        <div> 
            <Route path='/' component={Tabs}/>
            <Switch>
                <Route path='/about' component={About}/>
                <Route path='/counters' component={ParentContainer}/>
                <Route component={Error}/> 
            </Switch>
        </div>
    </BrowserRouter>
  )
}

export default App;
