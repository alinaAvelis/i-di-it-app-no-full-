import React, {Component} from "react";

import { DeleteItemButton } from "../buttons/delete-item-button/deleteItemButton";
import { SmallSubmitButton } from "../buttons/smallSubmitButton/smallSubmitButon";

export class NewListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        if(this.state.text === "" || this.state.text === " ") {
            this.setState({  
                errorText: 'Заполните поле'
              })  
        } else {
            this.props.madeList(this.state.text);
            this.setState({  
                text: ''
            }); 
            this.props.deleteCategory();
        }
        
    }

    render() {
      
        return (
            <>
                <div className="margin-top">
                    <form className="inline" onSubmit={this.hundleSubmit}>
                        <input 
                        className="input"
                        type="text" 
                        name="text" 
                        onChange={this.onChangeHandler}
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
                        clickHundler={this.props.deleteCategory}/>
                    <p>{this.state.errorText}</p>
                </div>
            </>
        )
    }
    
}

