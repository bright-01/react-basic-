import React from 'react';
import Avatar from "../basic/Avatar";


export default function Navbar({children}) {
    return (
        <div>
            <header style={{background: "yellow"}}>
                {children}

            </header>
        </div>
    )
}