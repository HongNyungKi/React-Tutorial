import React, { useState } from 'react';

function InputSample() {
    const [inputs, seInputs] = useState(
        {
            name: '',
            nickname: ''
        }
        //객체형태의 useState
    )
    const { name, nickname } = inputs;
    //나중에 name과nickname의 값을 쉽게 추출할수있도록 비주조화할당 적용해놓기
    const onChange = (e) => {
        const { name, value } = e.target;
        //input에서 change가 일어났을때 값을 미리 추출한다.
    }
    const onReset = () => {

    }
    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                이름 (닉네임)
            </div>
        </div>
    )
}

export default InputSample;