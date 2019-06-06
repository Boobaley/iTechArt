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

    shouldComponentUpdate(nextProps) {
        return this.props.value !== nextProps.value;
    };
  
    render() {
      return (
        <Counter value={this.props.value} add={this.handleAdd} remove={this.handleRemove} reset={this.handleReset}/> 
      );
    };
};

export default CounterContainer;