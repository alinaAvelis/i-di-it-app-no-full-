import React from "react";
import { LinkItem } from "../link-item/LinkItem";

export const LinkList = (props) => {
    const listStles = {
        marginLeft: props.marginLeft ? props.marginLeft : 0,
        marginTop: props.marginTop ? props.marginTop : 0
    }
    const styles = {
        display: 'block',
        // fontSize: 40,
        textAlign: 'left',
        marginTop: 20
    }

    const elements = props.characteristics.map((item) => {
        const {url, text} = item;
        return (
            <li><LinkItem url={url} text={text} styles={styles} color='#F28482' fontSize={props.fontSize}/></li>
        )
    });

     
    return (
        <>
            <ul className="list-without-list-type" style={listStles}>
                {elements}
            </ul>
        </>
    )
}