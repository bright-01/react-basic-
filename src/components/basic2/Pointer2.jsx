import React, {useState} from "react";
import '../../AppXY.css';

export default function Pointer2 (){

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    return (
        <div className='container' onPointerMove = { (e) => {
            setX(e.clientX);
            setY(e.clientY);
        }}>
            <div className='pointer' style={{transform : `translate(${x}px, ${y}px)`}}></div>
        </div>
    )
}