import React from "react";
import { LinkItem } from "../link-item/LinkItem";

import { AddNewListItemOfDates } from "../add-new-list-item-of-dates/addNewListItemOfDates";
import {AddButtonWithPlus} from '../buttons/add-button-with-plus/addButtonWithPlus';

export const CategoriesList = (props) => {

    const categoriesListStyle = {
        marginTop: props.marginTop ? props.marginTop : 0
    }

    const listStyle = {
        marginLeft: 25,
        marginBottom: 25
    }

   
    const elements = props.categoriesList.map((item) => {
        return (
            <>
            {item.isCategory ?
                <li className="categories-list-item" key={item.id}>{item.label} 
            
                < AddButtonWithPlus
                        color='#F28482'
                        marginLeft={20}
                        addFunction={() => props.anableListInCategory(item.label)}
                        text="Список"
                         />

                    { item.addlist &&
                        <AddNewListItemOfDates
                            madeListOfDeal={props.addListInCategory}
                            deleteNewItem={() => props.disableListInCategory(item.label)} 
                            nameOfCategory={item.label}
                        />
                    } 
                    <ul className="list-without-list-type" style={listStyle}> 
                        {item.list.map((point) => {
                            return (
                                <li key={point.id}>
                                    <LinkItem 
                                        color='#84A59D'
                                        url={point.url}
                                        text={point.label}
                                        />
                                </li>
                            )
                        })}
                    </ul>
                </li>
                :
                <li key={item.id}>
                    <LinkItem 
                        color="#F28482"
                        url={item.url}
                        text={item.label}/>
                </li>
            }
            </> 
        )
    });

    return (
        <ul className="list-without-list-type" style={categoriesListStyle}>{elements}</ul>
    )
}