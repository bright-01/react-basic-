import React from 'react';

export default function Card({children}){

        return ( <div
            style={{
                backgroundColor: 'black',
                borderRadius: '20px',
                color: 'white',
                minHeight: '200px',
                maxwidth: '200px',
                margin: '1rem',
                padding: 'Irem',
                textAlign: 'center'
            }}
        >
            {children}
        </div>
        )
}