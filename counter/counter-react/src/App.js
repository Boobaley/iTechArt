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
                <Route render={() =>
                    <Error/>
                }/> 
            </Switch>
        </div>
    </BrowserRouter>
  )
}

export default App;
