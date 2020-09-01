import React from 'react';
import { useState } from 'react';

function Input() {
    const [input, setInput] = useState({
        name: '',
        nickName: ''
    })
    const { name, nickName } = input
    const onChange = (e) => {
        const { name, value } = e.target
        const nextInput = {
            ...input,
            [name]: value
        }
        setInput(nextInput)
    };
    const onReset = () => {

    };
    return (
        <div>
            <input name='name' placeholder='이름' onChange={onChange} />
            <input name='nickName' placeholder='닉네임' onChange={onChange} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                이름(닉네임)
            </div>
        </div>
    )
}

export default Input;