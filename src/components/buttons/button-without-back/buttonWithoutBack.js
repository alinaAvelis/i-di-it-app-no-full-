import React, {useState, useEffect} from "react";

export const ButtonWithoutBack = (props) => {
    const [color, setColor] = useState();

    useEffect(() => {
        setColor(props.color);
    }, []);

    const styles = {
        color: color,
        display: 'inline-block',
        background:'none',
        border: 'none',
        fontSize: props.fontSize
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
        <button 
        style={styles} 
        onMouseEnter={mouseEnterHundle} 
        onMouseLeave={mouseLeaveHundle}>
            {props.text}
        </button>
    )
}