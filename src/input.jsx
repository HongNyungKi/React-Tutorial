import React from 'react';
import { useState } from 'react';


function Input() {
    const [input, setInput] = useState(
        {
            person: '',
            nickName: ''
        }
    )
    const { person, nickName } = input

    const onChange = (e) => {
        setInput(
            {
                ...input,
                [e.target.name]: e.target.value
            }
        )
    }
    const onReset = () => {
        setInput(
            {
                person: '',
                nickName: ''
            }
        )
    }

    return (
        <div>
            <input placeholder='이름' name='person' onChange={onChange} />
            <input placeholder='닉네임' name='nickName' onChange={onChange} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>{person}({nickName})
            </div>
        </div>
    )
}

export default Input;