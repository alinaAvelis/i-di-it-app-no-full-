import React, {Component} from "react";

import { LinkItem } from "../../components/link-item/LinkItem";
import { BackButton } from '../../components/buttons/backButton/backButton';
import { PageTitle } from '../../components/page-title/page-title';
import { HeaderItem } from "../../components/header/header";
import { NewListItem } from "../../components/new-list-item/newListItem";
import { CategoriesList } from "../../components/caegoriesList/categoriesList";
import { AddNewListItemOfDates } from "../../components/add-new-list-item-of-dates/addNewListItemOfDates";
import { AddButtonWithPlus } from "../../components/buttons/add-button-with-plus/addButtonWithPlus";


export class ListOfPlansOnDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addCategory: false,
            // addListToCategory: false,
            addList: false
        }

        this.addNewCategory = this.addNewCategory.bind(this);
        this.deleteCategory = this.deleteCategory.bind(this);
        this.addNewListOfDates = this.addNewListOfDates.bind(this);
        this.deleteNewListOfDates = this.deleteNewListOfDates.bind(this);
        // this.anableListInCategory = this.anableListInCategory.bind(this);
        // this.disableListInCategory = this.disableListInCategory.bind(this);
    }


    addNewCategory() {
        this.setState(() => {
            return {addCategory: true}
        });
    }

    deleteCategory() {
        this.setState(() => {
            return {addCategory: false}
        });
    }

    addNewListOfDates() {
        this.setState(() => {
            return {addList: true}
        });
    }

    deleteNewListOfDates() {
        this.setState(() => {
            return {addList: false}
        });
    }

    // anableListInCategory() {
    //     this.setState(() => {
    //         return {addListToCategory: true}
    //     });
    //   }
    
    //   disableListInCategory() {
    //       this.setState(() => {
    //           return {addListToCategory: false}
    //       });
    //     }

    render() {
        return (
            <>
                <HeaderItem />
                <div className="page-main-body">
                    <div className="flex-space-between">
                        <BackButton />
                        <LinkItem 
                            url = '/profile' 
                            text= 'Личный кабинет'
                            color='#F28482'/>
                    </div>

                    <PageTitle title={'Создай структуру списков!'} />

                    <div className="addButtons  flex">
                    
                        <AddButtonWithPlus
                            color='#84A59D'  
                            marginRight={20} 
                            addFunction={this.addNewCategory} 
                            text="Категория"
                        />
                        <AddButtonWithPlus
                            color='#84A59D' 
                            addFunction={this.addNewListOfDates}
                            text="Список"
                            />
                    </div>

                    <div className="lists-container">
                        {this.state.addCategory && 
                        <NewListItem
                            madeList={this.props.madeCategoriesList}  
                            deleteCategory={this.deleteCategory}/>}

                        {this.state.addList && 
                        <AddNewListItemOfDates
                            deleteNewItem={this.deleteNewListOfDates}
                            madeListOfDeal={this.props.madeListOfDeal}/>}
                        
                        <CategoriesList 
                            categoriesList={this.props.dataOfLists}
                            anableListInCategory={this.props.anableListInCategory}
                            disableListInCategory={this.props.disableListInCategory}
                            addListToCategory={this.state.addListToCategory} //значение true или false
                            addListInCategory = {this.props.addListInCategory} // функция отправки данных
                            />
                    </div>
                </div>
            </>
        )
    }
}

