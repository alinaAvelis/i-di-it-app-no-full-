import React from "react";

import { HeaderItem } from "../../components/header/header";
import {PageTitle} from '../../components/page-title/page-title';
import { LinkList } from "../../components/link-list/linkList";
import { LinkItem } from "../../components/link-item/LinkItem";

export const Formats = ()=> {

const characteristics = [
    {url : '/formats/list-of-plans-on-day', text: 'Список'},
    {url : '/calendar', text: 'Календарь'}
]
   
   return (
    <>
        <HeaderItem />
        <div className="page-main-body">
            <div className="text-align-rights">
                <LinkItem 
                url = '/profile' 
                text= 'Личный кабинет'
                color='#F28482'/>
            </div>
            <PageTitle title={'Выбери формат расписания!'} />
            <LinkList characteristics={characteristics}   marginTop={25}  fontSize={40}/>
        </div>
    </>
   )
}