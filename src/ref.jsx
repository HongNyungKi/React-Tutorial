import React from 'react';
import { useRef } from 'react';

function Ref() {
    const resetBtn = () => {
        console.log('button click');
        love.current.focus();
    }
    const love = useRef();
    return (
        <div>
            <input type="text" ref={love} />
            <input type="text" />
            <button onClick={resetBtn}>Focus</button>
        </div>
    )
}

export default Ref;


//dom에 직접 접근하는 법
//1. useRef를 불러온다. 
//2. useRef()를 변수에 넣어 객체를 생성한다. 
//3. 생성한 변수를 내가 조작하고싶은 특정 요소의 props로 넣는다. props의 이름은 ref={} 이다.
//4. 버튼을 눌렀을때 포커스가 원하는 요소로 가게하기 위함이므로 버튼을 눌렀을때 실행하는 콜백함수에 이것도 같이 등록한다.
//5. 변수.current 그리고 api입력


//6. useRef는 Dom을 조작하는것 이외에도 렌더링과 관련이 없는 변수를 제어할때도 사용된다. 