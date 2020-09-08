import React from 'react';
import UserList from './UserList';
import { useRef } from 'react';
import CreateUser from './createUser';
import { useState } from 'react';

function App() {
  const [users, setUers] = useState([
    {
      id: 1,
      username: '홍녕기',
      email: 'hnk2017@naver.com',
      active: true
    }, {
      id: 2,
      username: '양현준',
      email: 'akakak231@google.com',
      active: false
    }, {
      id: 3,
      username: '김철환',
      email: 'kkcch9@naver.com',
      active: false
    }
  ])
  const nextId = useRef(4)
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
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    }
    setUers(users.concat(user))
    setInputs({
      username: '',
      email: ''
    })
    nextId.current += 1
  }
  const onRemove = (id) => {
    setUers(users.filter(user => user.id !== id))
  }
  const onToggle = (id) => {
    setUers(users.map(
      user => user.id === id ? { ...user, active: !user.active } : user
    ))
  }
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList
        users={users}
        onRemove={onRemove}
        onToggle={onToggle} />
    </>
  )
}
export default App