import React from 'react';
import CounterContainer from './CounterContainer';
import ParentCounter from '../views/ParentCounter/ParentCounter';

class ParentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           arrOfCounters: [<CounterContainer key={1} />, <CounterContainer key={2}/>]
        }
    }
    render() {
        return (
           <ParentCounter 
               arr={this.state.arrOfCounters}
           />

        )
    }
    
}

export default ParentContainer;