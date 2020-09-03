import React from 'react';
import { useRef } from 'react';

function Ref() {
    const focusBtn = () => {
        love.current.focus()
    }
    const love = useRef()
    return (
        <>
            <input ref={love} />
            <input />
            <button onClick={focusBtn} >Focus</button>
        </>
    )
}

export default Ref;
