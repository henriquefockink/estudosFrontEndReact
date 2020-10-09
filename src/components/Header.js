import React from 'react';
//Title é enviadas pelo componente pai
export default function Header({title, children}){
    return(
        <header>
            <h1>{title}</h1>
            {children}
        </header>
    );
}