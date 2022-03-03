import React from "react";
import { useHistory } from "react-router-dom";

import { arrowImgSryles } from '../../styles/styles';
import arrow from '../arrow.png';
import { ButtonWithoutBack } from "../button-without-back/buttonWithoutBack";


export const BackButton = (props) => {
    
    const history = useHistory();


    return (
        <div onClick={() => history.goBack()}>
            <img  src={arrow} alt="стрелка влево" style={arrowImgSryles}/>
            <ButtonWithoutBack text="Назад" color="#F28482" fontSize={16}/>
            
        </div>
    )
}