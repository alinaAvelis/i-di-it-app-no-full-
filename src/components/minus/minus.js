import React from 'react';
import './minus.css';

export const Minus = (props) => {
    const blockStyles = {
        display: props.display
    }

    const plusStyles = {
        backgroundColor: props.color
    }
    return (
           <div style={blockStyles}>
               <p className="minus" style={plusStyles}></p>
           </div>
    )
}