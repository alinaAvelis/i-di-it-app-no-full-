import React, {useState} from'react';
import { bigButtonStyles} from '../../styles/styles';

export const BigSubmitButton = (props) => {
    const [opacity, setOpacity] = useState(1);

    const mouseEnterHundle = () => {
       setOpacity(0.8);
    }

    const mouseLeaveHundle = () => {
        setOpacity(1);
    }

    const styles = {
        ...bigButtonStyles,
        opacity: opacity
    }

    return (
        <input 
            // className={props.nameOfClass} 
            type="submit"  
            value= {props.value}
            style={styles}
            onMouseEnter={mouseEnterHundle} 
            onMouseLeave={mouseLeaveHundle}
        />
    )
}