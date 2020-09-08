import React from 'react';
import { useEffect } from 'react';

function User({ person, onRemove, onToggle }) {
    // useEffect(
    //     () => {
    //         console.log(person)
    //     }, [person]
    // )
    const { username, email, id, active } = person;
    return (
        < div >
            <b style={
                {
                    color: active ? 'green' : 'black',
                    cursor: active ? 'pointer' : 'auto'
                }
            }
                onClick={() => onToggle(id)}>
                {username}({email})</b>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div >
    )
}

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {users.map(
                (user) => (
                    <User
                        person={user}
                        key={user.id}
                        onRemove={onRemove}
                        onToggle={onToggle}
                    />
                )
            )}
        </div>
    )
}

export default UserList;

