import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { linkStyles } from '../styles/styles';

export const LinkItem = (props) => {
    const [color, setColor] = useState();

    useEffect(() => {
        setColor(props.color);
    }, []);
    
    const linkstyle = {
        ...linkStyles,
        ...props.styles,
        fontSize: props.fontSize ? props.fontSize : 16,
        fontWeight: props.fontWeight ? props.fontWeight : "normal",
        color: color
    };

    

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
        <>
            <Link to={props.url} style={linkstyle} onMouseEnter={mouseEnterHundle} onMouseLeave={mouseLeaveHundle}>
                 {props.text}
            </Link>
        </>
    )
}