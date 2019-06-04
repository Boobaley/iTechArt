import React from 'react';
import CounterContainer from './CounterContainer';
import ParentCounter from '../views/ParentCounter/ParentCounter';

class ParentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           arrOfCounters: [<CounterContainer />]
        }

        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd() {
        console.log(this.state.arrOfCounters);
    }

    render() {
        return (
           <ParentCounter 
               arr={this.state.arrOfCounters}
               adding={this.handleAdd}
           />
        );
    }
}

export default ParentContainer;