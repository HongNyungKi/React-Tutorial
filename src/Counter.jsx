import React from 'react';
import { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);
    const Increase = () => { setNumber(number + 1) }
    const Decrease = () => { setNumber(number - 1) }
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={Increase}>+1</button>
            <button onClick={Decrease}>-1</button>
        </div>
    )
}

export default Counter;