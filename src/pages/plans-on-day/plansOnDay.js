import React, {Component} from "react";

import { HeaderItem } from "../../components/header/header";
import { LinkItem } from "../../components/link-item/LinkItem";
import { BackButton } from '../../components/buttons/backButton/backButton';
import { PageTitle } from '../../components/page-title/page-title';
import { AddButtonWithPlus } from "../../components/buttons/add-button-with-plus/addButtonWithPlus";
import { DeleteButtonWithMinus } from "../../components/buttons/delete-button-with-minus/deleteButtonWithMinus";
import { NewListItem } from "../../components/new-list-item/newListItem"; 
import {ToDoList} from '../../components/to-do-list/toDoList';

export class PlansOnDay extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            addItem: false
        }

        this.addNewItem = this.addNewItem.bind(this);
        this.deleteNewItem = this.deleteNewItem.bind(this);
        this.sendToDoList = this.sendToDoList.bind(this);
    }

    addNewItem() {
        this.setState(() => {
            return {addItem: true}
        });
    }

    deleteNewItem() {
        this.setState(() => {
            return {addItem: false}
        });
    }

    sendToDoList(itemText) {
        this.props.addToDoList(itemText, this.props.plansId);
    }

    render() {
        return (
            <>
                <HeaderItem text={this.props.plansId}/>
                <div className="page-main-body">
                    <div className="flex-space-between">
                        <BackButton />
                        <LinkItem 
                            url = '/profile' 
                            text= 'Личный кабинет'
                            color='#F28482'/>
                    </div>

                    <PageTitle title='Спланируй свой день!' />

                    <div className="addButtons  flex">
                    
                        <AddButtonWithPlus
                            color='#84A59D'  
                            marginRight={20} 
                            addFunction={this.addNewItem} 
                            text="Добавить"
                        />
                        < DeleteButtonWithMinus
                            color='#84A59D' 
                            deleteFunction={this.addNewListOfDates}
                            text="Удалить"
                            />
                    </div>

                    {this.state.addItem && 
                        <NewListItem 
                            madeList={this.sendToDoList}  
                            deleteCategory={this.deleteNewItem}/>
                    }

                    <ToDoList 
                        dataOfLists={this.props.dataOfLists}
                        listId = {this.props.plansId}/>

                </div>
            </>
        )
    }
}