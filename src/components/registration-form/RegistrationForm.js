import React, {Component} from 'react';

import { BigSubmitButton } from '../buttons/big-submit-button/bigSubmitButton';
import { HeaderItem } from '../header/header';
import {postData} from '../../api/server/server';
import { arrowImgSryles } from '../styles/styles';
import arrow from '../buttons/arrow.png';
import { LinkItem } from '../link-item/LinkItem';
import { BackButton } from '../buttons/backButton/backButton';

export class RegistrationForm extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            email: "",
            login: "",
            password: "",
            repeatPassword: "", 
        }

     
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeHandler(e){  
        this.setState({  
          [e.target.name]: e.target.value  
        })  
      }


    handleSubmit(event) {
        event.preventDefault();
        const {email, login, password} = this.state;
        const profile = {
            id: 1,
            email: email,
            login: login,
            password: password
        };

        const json = JSON.stringify(Object.fromEntries(profile.entries()));


        postData(json);
        
        this.setState({
            email: "",
            login: "",
            password: "",
            repeatPassword: ""});
    }

    render() {
        
        return (
            <>
            <HeaderItem />
            <div className="page-main-body">
                <BackButton />
                <div className="text-align-center">
                    <h2 className="subtitle">Регистрация</h2>
                    <form className="grid-one-column" onSubmit={this.handleSubmit}>
                        <input 
                            className="input" 
                            type="text" 
                            name="email"
                            onChange={this.onChangeHandler} 
                            value={this.state.email}
                            placeholder="Укажите ваш e-mail" />
                        <input 
                            className="input" 
                            type="text" 
                            name="login"
                            onChange={this.onChangeHandler} 
                            value={this.state.login}
                            placeholder="Придумайте Логин" 
                            />
                        <input 
                            className="input" 
                            type="text"
                            name="password"
                            onChange={this.onChangeHandler} 
                            value={this.state.password} 
                            placeholder="Придумайте Пароль"/>
                        <input 
                            className="input" 
                            type="text"
                            name="password"
                            onChange={this.onChangeHandler} 
                            value={this.state.repeatPassword} 
                            placeholder="Повторите Пароль"/>

                        <BigSubmitButton value="Зарегестрироваться"/>

                    </form>
                    <div>
                        <img  src={arrow} alt="стрелка влево" style={arrowImgSryles}/>
                        
                        <LinkItem 
                            url ='/authorization'
                            text='Перейти к авторизации'
                            color={'#F28482'}/> 
                    </div>
                </div>
            </div>
            </>
        );
    }
}