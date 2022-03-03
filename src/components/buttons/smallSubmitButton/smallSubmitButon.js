import React, {useState,useEffect} from'react';
// import { bigButtonStyles} from '../../styles/styles';

export const SmallSubmitButton = (props) => {
    const [color, setColor] = useState();


    useEffect(() => {
        setColor(props.color);
    }, []);

    const buttonStyles = {
        border: `2px solid ${color}`,
        marginRight: props.marginRight ? props.marginRight : 0,
        marginLeft: props.marginLeft ? props.marginLeft : 0,
        color: color
    }

    // const textStyles = {
    //     color: color     
    // }

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
        <input 
            className='small-submit-button'
            type="submit"  
            value= {props.value}
            style={buttonStyles}
            onMouseEnter={mouseEnterHundle} 
            onMouseLeave={mouseLeaveHundle}
        />
    )
}