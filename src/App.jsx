import React from 'react';
import UserList from './UserList';
import { useRef, useState } from 'react';
import CreateUser from './createUser';

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: '홍녕기',
      email: 'hnk2017@naver.com'
    }, {
      id: 2,
      username: '양현준',
      email: 'akakaka231@google.com'
    }, {
      id: 3,
      username: '김철환',
      email: 'kkcch9@naver.com'
    }
  ])
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  })
  const { username, email } = inputs
  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  }
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    }
    setUsers(users.concat(user))
    setInputs({
      username: '',
      email: ''
    })
    console.log(nextId.current)//
    nextId.current += 1
  }

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} />
    </>
  )
}

export default App