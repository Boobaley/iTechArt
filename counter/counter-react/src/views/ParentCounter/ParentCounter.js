import React from 'react';
import Button from './styles';
import {buttonsWrapper} from './styles'

const ParentCounter = (props) => {
    return (
        <div>
            <div style={buttonsWrapper}>
               <Button>DELETE TIMER</Button> 
               <Button>RESET</Button> 
               <Button onClick={props.adding} >ADD TIMER</Button> 
            </div>
            <div>{props.arr}</div>
        </div>
    )
}

export default ParentCounter;