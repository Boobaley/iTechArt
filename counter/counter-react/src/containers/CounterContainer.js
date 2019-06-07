import React from 'react';
import Counter from '../views/Counter/Counter';

class CounterContainer extends React.Component {
    handleAdd = () => {
       this.props.increment(this.props.id);
    };
  
    handleRemove = () => {
      this.props.decrement(this.props.id);
    };
  
    handleReset = () => {
      this.props.reset(this.props.id);
    };

    componentDidMount() {
        console.log(`Component # ${this.props.id + 1} rendered`);
    }

    shouldComponentUpdate(nextProps) {
        if (this.props.value !== nextProps.value) {
            console.log(`Component # ${this.props.id + 1} changed`);
            return true;
        } else {
            console.log(`Component # ${this.props.id + 1} not changed`);
            return false;
        }
    };
    
    componentWillUnmount() {
        console.log(`Component # ${this.props.id + 1} unmounted`);
    }
  
    render() {
      return (
        <Counter value={this.props.value} add={this.handleAdd} remove={this.handleRemove} reset={this.handleReset}/> 
      );
    };
};

export default CounterContainer;