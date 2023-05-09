import React, {useEffect, useState} from 'react';
import '../../AppXY.css'

export default function Pointer(){
    const [position, setPosition] = useState({x : 0, y : 0});
    const mouseMoveHandle = (event) => setPosition( {x : event.clientX , y: event.clientY})
    // x만 움직이게
    const mouseMoveHandle2 = (event) => setPosition( (prev) => ({...prev, x: event.clientX}) )

    useEffect( () => {
        console.log('ddddd')
        document.addEventListener('mousemove', mouseMoveHandle);

        return () => {
            document.removeEventListener('mousemove', mouseMoveHandle)
        }


    },[])

    return (
        <div className='container'>
            <div className='pointer' style={{transform: `translate(${position.x}px, ${position.y}px`}}></div>
        </div>
    )
}