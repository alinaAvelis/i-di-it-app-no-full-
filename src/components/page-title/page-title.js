import React from 'react';

import './page-title.css'

export const PageTitle = (props) => {
    const title = props.title;
    return (
        <div className="text-align-center">
            <h1 className="page-title">{title}</h1>
        </div>
       
    )
}
