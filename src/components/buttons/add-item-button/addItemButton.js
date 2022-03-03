import React, {useState, useEffect} from "react";

import { Plus } from "../../plus/plus";

export const Button = (props) => {
    const [color, setColor] = useState();

    const withText = "position-relative  add-button-with-text";
    const withoutText = 'position-relative  add-button-withtout-text';

    useEffect(() => {
        setColor(props.color);
    }, []);

    const buttonStyles = {
        border: `2px solid ${color}`,
        marginRight: props.marginRight ? props.marginRight : 0
    }

    const textStyles = {
        color: color     
    }

    const mouseEnterHundle = () => {
        if(color == '#84A59D') {
            setColor('#F28482');
        } else  {
            setColor('#84A59D');
        }
    }

    const mouseLeaveHundle = () => {
        if(color == '#F28482') {
            setColor('#84A59D');
        } else  {
            setColor('#F28482');
        }
    }


    return (
        <button className={props.addText ? withText : withoutText}
        style={buttonStyles}
        onMouseEnter={mouseEnterHundle} 
        onMouseLeave={mouseLeaveHundle}
        onClick={props.addNewCategory}
        >
            {props.addText &&  <span style={textStyles}>{props.text}</span>}
            {props.withPlus &&  <Plus display='inline-block' color={color} bigPlus={props.bigPlus} />}
         
            
        </button>
    )
}