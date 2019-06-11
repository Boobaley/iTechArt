import React from 'react';
import Button from './styles';
import {output, buttonsWrapper, counterWrapper} from './styles';

const Counter = (props) => {
    return (
      <div style={counterWrapper}>
        <div style={output}>{props.value}</div>
        <div style={buttonsWrapper}>
            <Button onClick={props.remove}>DECREMENT</Button>
            <Button onClick={props.reset}>RESET</Button>
            <Button onClick={props.add}>INCREMENT</Button>
        </div>
      </div>
    )
}



export default Counter;