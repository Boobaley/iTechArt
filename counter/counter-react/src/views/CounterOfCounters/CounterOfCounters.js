import React from 'react';
import Button from './styles';
import {buttonsWrapper, parentCounterWrapper} from './styles'

const ParentCounter = (props) => {
    return (
        <div style={parentCounterWrapper} >
            <div style={buttonsWrapper}>
               <Button onClick={props.remove}>DELETE TIMER</Button> 
               <Button onClick={props.reset}>RESET</Button> 
               <Button onClick={props.add}>ADD TIMER</Button> 
            </div>
        </div>
    )
}

export default ParentCounter;