import React, {useEffect, useState} from 'react';

export default ({totalCount, onClickTotal}) => {

    const [ number, setNumber ] = useState(0);
    const addNumberHandle = () => ( setNumber((prev)=>prev+1)) ;
    useEffect(()=>{
        console.log("#########################");
        return () => { console.log("Dddddddddd")}

    }, [])

    return (
        <div className='counter'>
            <p className='number'> {number} <span className='total'> / {totalCount} </span>

            </p>
            <button className='button' onClick={addNumberHandle}
                    >ADD+ddd</button>
        </div>
    );
}