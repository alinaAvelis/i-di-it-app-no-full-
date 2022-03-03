import React, {Component} from 'react';
import { Redirect} from 'react-router-dom';
import { getData } from '../../api/server/server';

import { AuthorizationForm } from './AuthorizationForm';


export class AuthorizationFormContainer extends Component  {
    constructor (props) {
        super(props);
        this.state = {
          email: "",
          password: "",
          authorized: false,
          
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
    
        getData()
        .then(data => {
            const { password, email} = this.state;
            console.log(password);
            console.log(email);
            const newData = data;
            newData.forEach(elem => { 
                const auth = password == elem.password && email == elem.email;
                this.setState({
                    authorized: auth
                });
            });
        })
    
        if(this.state.authorized) {
            this.setState({
                email: '',
                password:'' }); 
        } 
    }

   render() {
       
       if(this.state.authorized) {
        return <Redirect to='formats'/>
        
       } else {
        return <AuthorizationForm onChangeHandler={this.onChangeHandler} handleSubmit={this.handleSubmit}/>;
       }
   }
}