import React from 'react';

import { HeaderItem } from "../../components/header/header";
import {PageTitle} from '../../components/page-title/page-title';
import { LinkList } from "../../components/link-list/linkList";


export const Home = () => {
    const characteristics = [
        {url : '/authorization', text: 'Авторизация'},
        {url : '/registration-form', text: 'Регистрация'}
    ]

    return (

        <>
            <HeaderItem />
            <div className="page-main-body">
                <PageTitle title={'Спланируй свой день!'} />
                <LinkList characteristics={characteristics} marginTop={25}  fontSize={40}/>   
            </div>
        </>

    )
}

