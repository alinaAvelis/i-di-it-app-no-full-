import React, {useState, useEffect} from "react";

import { Plus } from "../../plus/plus";


export const AddButtonWithPlus = (props) => {
    const [color, setColor] = useState();

    useEffect(() => {
        setColor(props.color);
    }, []);

    const buttonStyles = {
        border: `2px solid ${color}`,
        marginRight: props.marginRight ? props.marginRight : 0,
        marginLeft: props.marginLeft ? props.marginLeft : 0
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
        <button className="position-relative  add-button-with-text"
        style={buttonStyles}
        onMouseEnter={mouseEnterHundle} 
        onMouseLeave={mouseLeaveHundle}
        onClick={props.addFunction}
        >
            <span style={textStyles}>{props.text}</span>
            <Plus display='inline-block' color={color} bigPlus={props.bigPlus} />
         
        </button>
    )
}