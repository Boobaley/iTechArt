import React from 'react';
import PropTypes from 'prop-types';
import Button from './styles';
import {output, buttonsWrapper, counterWrapper} from './styles';

const Counter = (props) => {
    return (
      <div style={counterWrapper}>
        <div style={output}>{props.counterValue}</div>
        <div style={buttonsWrapper}>
            <Button onClick={props.decrement}>DECREMENT</Button>
            <Button onClick={props.reset}>RESET</Button>
            <Button onClick={props.increment} >INCREMENT</Button>
        </div>
      </div>
    )
}

Counter.propTypes = {
    counterValue: PropTypes.number.isRequired,
    decrement: PropTypes.func.isRequired,
    reset: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired,
}

export default Counter;