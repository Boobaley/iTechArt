import React from 'react';
import CounterContainer from './CounterContainer';
import CounterOfCounters from '../views/CounterOfCounters/CounterOfCounters';

class ParentContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counters: [{id: 0, value: 0}],
            lastId: 0
        };
    };

    increment = (id) => {
        const newState = this.state.counters.map(item => {
            if (id === item.id) {
                let value = item.value + 1;
                return {id, value};
            }
            return item;
        });
        this.setState({counters: newState})
    };

    decrement = (id) => {
        const newState = this.state.counters.map(item => {
            let value = item.value;
            if (id === item.id) {
                if (value > 0) {
                    value--;
                    return {id, value}
                } else {
                    return {id, value}
                }
            }
            return item;
        });
        this.setState({counters: newState})
    };

    resetCounter = (id) => {
        const newState = this.state.counters.map(item => {
            let value = item.value;
            if (id === item.id) {
                value = 0;
                return {id, value};
            }
            return item;
        });
        this.setState({counters: newState})
    };

    addCounter = () => {
        let newState = this.state.counters.map(item => {
            if (item.value % 2 === 0 && item.value !== 0) {
                return {id: item.id, value: item.value + 1};
            };
            return item;
        });
        let id = this.state.lastId + 1;
        newState.push({id, value: 0});
        this.setState({counters: newState, lastId: id});
    };
    
    removeCounter = () => {
        let newState = this.state.counters.map(item => {
            if (item.value % 2 !== 0) {
                return {id: item.id, value: item.value -1};
            }
            return item;
        });
        let id = this.state.lastId - 1;
        if (newState.length > 1) {
            newState.pop();
        }
        this.setState({counters: newState, lastId: id});
    };

    generaReset = () => {
        let newState = this.state.counters;
        newState.splice(1);
        newState[0].value = 0;
        this.setState({counters: newState, lastId: 0});
    }

    renderCounters = () => {
        return this.state.counters.map((item) => {
            return <CounterContainer 
            value={item.value} 
            id={item.id} 
            key={item.id} 
            increment={this.increment}
            decrement={this.decrement}
            reset={this.resetCounter}
            />
        });
    };

    render() {
        return (
            <div>
                <CounterOfCounters add={this.addCounter} remove={this.removeCounter} reset={this.generaReset}/>
                {this.renderCounters()}
            </div>
        );
    };
};

export default ParentContainer;