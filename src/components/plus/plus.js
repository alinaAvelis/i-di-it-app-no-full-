import React from 'react';

import './plus.css';

export const Plus = (props) => {
    const simplePlusFirst = "plus-part-first";
    const bigPlusFirst = "big-plus-part-first";
    const simplePlusSecond = "plus-part-second";
    const bigPlusSecond = "big-plus-part-second";

    const blockStyles = {
        display: props.display
    }

    const plusStyles = {
        backgroundColor: props.color
    }
    return (
           <div style={blockStyles}>
               <p className={!props.bigPlus ? simplePlusFirst : bigPlusFirst} style={plusStyles}></p>
               <p className={!props.bigPlus ? simplePlusSecond : bigPlusSecond}  style={plusStyles}></p>
           </div>
    )
}