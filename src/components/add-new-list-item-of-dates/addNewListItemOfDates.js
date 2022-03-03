import React, {Component} from "react";

import { DeleteItemButton } from "../buttons/delete-item-button/deleteItemButton";
import { SmallSubmitButton } from "../buttons/smallSubmitButton/smallSubmitButon";

export class AddNewListItemOfDates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            text: '',
            errorText: ''
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.hundleSubmit = this.hundleSubmit.bind(this);
        
    }

    onChangeHandler(e){  
        this.setState({  
          [e.target.name]: e.target.value  
        })  
      }


    hundleSubmit(e) {
        e.preventDefault();
        if(this.state.date === "" || this.state.date === " ") {
            this.setState({  
                errorText: 'Заполните дату'
              })  
        } else {
            const newText = `${this.state.date}. ${this.state.text}`;
            const newUrl = `/formats/list-of-plans-on-day/${this.state.date}`;
            
           
            this.props.madeListOfDeal(newText, newUrl, this.state.date, this.props.nameOfCategory);
            this.setState({  
                date: '',
                text: ''
            }); 

            this.props.deleteNewItem();
        }
        
    }

    render() {
      
        return (
            <>
                <div className="margin-top">
                    <form className="inline" onSubmit={this.hundleSubmit}>
                        <input 
                        className="input"
                        type="date" 
                        name="date" 
                        onChange={this.onChangeHandler}
                        value={this.state.date} 
                        required />

                        <input 
                        className="input"
                        type="text" 
                        name="text" 
                        onChange={this.onChangeHandler}
                        placeholder="Описание"
                        value={this.state.text}  />
                        <SmallSubmitButton 
                            value="Добавить"
                            color='#F28482'
                            nameOfClass="button"
                            marginLeft={20}
                            />
                    </form>
                   
                    <DeleteItemButton  
                        color='#F28482'  
                        text="Удалить"
                        marginLeft={20}
                        clickHundler={this.props.deleteNewItem}/>
                    <p>{this.state.errorText}</p>
                </div>
                
            </>
        )
    }
    
}
