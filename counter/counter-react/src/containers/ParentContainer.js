import React from 'react';
import CounterContainer from './CounterContainer';
import CounterOfCounters from '../views/CounterOfCounters/CounterOfCounters';

class ParentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counters: 1
        }

        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelette = this.handleDelette.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleAdd() {
        this.setState({counters: this.state.counters + 1});
    }

    handleDelette() {
        if (this.state.counters > 1) {
            this.setState({counters: this.state.counters - 1})
        } else {
            this.setState({counters: 1})
        } 
    }

    handleReset() {
        this.setState({counters: 1})
    }

    render() {
        const counter = <CounterContainer/>;
        let counters = [];

        for (let i = 0; i < this.state.counters; i++) {
            counters.push(counter);
        }
       
        return (
            <div>
                <CounterOfCounters 
                    add={this.handleAdd}
                    delette={this.handleDelette}
                    reset={this.handleReset}
                />
                {counters.map((item, id) => 
                    <div key={id}>
                        {item}
                    </div>
                )}
            </div>
           
        );
    }
}

export default ParentContainer;