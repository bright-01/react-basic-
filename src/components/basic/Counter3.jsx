import React, {useEffect, useState} from 'react';

export default ({totalCount, onClickTotal}) => {

    const [number, setNumber] = useState(0);
    const numberAddHandle = () => setNumber((prev)=> prev+1);
    useEffect(() => {
        console.log("number가 바뀜");
        setNumber( number );
        return ()=> {
            console.log("clear")
        }

    }, [number])

    return (
        <div className='counter'>
            <p className='number'> {number} <span className='total'> / {totalCount} </span>

            </p>
            <button className='button' onClick={numberAddHandle}
                    >ADD+ddd</button>
        </div>
    );
}