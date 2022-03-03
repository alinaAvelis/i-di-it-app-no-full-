import React from 'react';

import {LinkItem} from "../link-item/LinkItem";
import { HeaderItem } from '../header/header';
import { BackButton } from '../buttons/backButton/backButton';
import { BigSubmitButton } from '../buttons/big-submit-button/bigSubmitButton';


export const AuthorizationForm = (props) => {
    return (
        <>
            <HeaderItem />
            <div className="page-main-body">
                <BackButton />

                <div className="text-align-center">
                <h2 className="subtitle">Авторизация</h2>
                    <form className="grid-one-column" onSubmit={props.handleSubmit}>
                            <input 
                                className="input" 
                                type="text" 
                                name="email"
                                onChange={props.onChangeHandler} 
                                placeholder="Ваш e-mail" />
                            <input 
                                className="input" 
                                type="text"
                                name="password"
                                onChange={props.onChangeHandler} 
                                placeholder="Ваш пароль"/>

                            <BigSubmitButton value="Войти" />
                            
                        </form>

                    <p>Если ты еще не зарегистрировался, 
                        <LinkItem url="/registration-form" text=" обязательно сделай это!" color='#84A59D'/>
                    </p>           
                </div>
            </div>
        </>
        
    )
}