import React, {useState, useEffect} from "react";
import { useLocation} from "react-router-dom";


import { LinkItem } from "../link-item/LinkItem";


export const HeaderItem = (props) => {

    const [text, setText] = useState();

    const namesForLinks = [
        {url: '/',
         text: "Главная"},
         {url: '/authorization',
         text: "Авторизация"},
         {url: '/registration-form',
         text: "Регистрация"},
         {url: '/formats',
         text: "Формат"},
         {url: '/formats/list-of-plans-on-day',
         text: "Список планов"},
       
    ]

    const location = useLocation();
    let currentLocation = location.pathname;

    useEffect(()=> {
        namesForLinks.forEach(item => {
            if(item.url === currentLocation) {
                let newText = item.text;
                setText(newText); 
            } else if(props.text){
                setText(props.text);
            }
        })
    }, [currentLocation]);
    
   
    return (
        <div  className="header-item-link text-align-center">
            <LinkItem url={currentLocation} text={text} color='#84A59D'/>
        </div>
    )
}