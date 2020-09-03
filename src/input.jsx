import React from 'react';
import { useState } from 'react';
function Input() {
    const [text, setText] = useState({ name: '', nickName: '' });
    const { name, nickName } = text
    return (
        <div>
            <input placeholder='이름' name='name' onChange={onChange} />
            <input placeholder='닉네임' name='nickName' onChange={onChange} />
            <button>초기화</button>
            <div>
                <b>값: </b>이름(닉네임)
            </div>
        </div>
    )
}

export default Input;