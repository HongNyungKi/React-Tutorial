import React from 'react';
import UserList from './UserList';
import { useRef } from 'react';
import CreateUser from './createUser';


function App() {
  const users = [{
    id: 1,
    username: '홍녕기',
    email: 'hnk2017@naver.com'
  }, {
    id: 2,
    username: '양현준',
    email: 'akakak231@google.com'
  }, {
    id: 3,
    username: '김철환',
    email: 'kkcch9@naver.com'
  }]

  const nextId = useRef(4);
  //nextId 에 고유값으로 4를 지정한 것이다. 
  //값이 바뀌어도 리렌더링 될 필요가 없기 때문에 useRef로 관리하는 것이다. 

  const onCreate = () => {
    //요소를 만들때 등록할 함수이다. 
    console.log(nextId.current) //4
    nextId.current += 1; //콘솔로 nextId를 불러온뒤 값을 1을 추가해준다. 
  }

  return (
    <>
      <CreateUser />
      <UserList users={users} />
    </>
  )
}

export default App