import React from 'react';
import Counter from '../views/Counter/Counter';

class CounterContainer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        count: 0
      }

      this.handleRemove = this.handleRemove.bind(this);
      this.handleReset = this.handleReset.bind(this);
      this.handleAdd = this.handleAdd.bind(this);
    }
    
    handleAdd() {
      this.setState({ count: this.state.count + 1 });
    };
  
    handleRemove() {
      if (this.state.count > 0) {
        this.setState({ count: this.state.count - 1 });
      } else {
        this.setState({ count: 0 });
      }
    };
  
    handleReset() {
      this.setState({ count: 0 })
    };
  
    render() {
      return (
        <Counter 
          counterValue={this.state.count}
          increment={this.handleAdd}
          decrement={this.handleRemove} 
          reset={this.handleReset}
        /> 
      );
    };
};

export default CounterContainer;