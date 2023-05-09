import React, {useState} from "react";

export default function Counter2(){

    const [count, setCount] = useState(0);
    const addConunt = () =>{
        setCount( count + 1);
        setCount( count + 1);
        setCount( count + 1);
        setCount( (prev) =>{
            return prev + 1;
        });
    }

    return (
        <div className='counter'>
            <span className='number'>{count}</span>
            <button className='button' onClick={addConunt}>더하기</button>
        </div>
    )

}