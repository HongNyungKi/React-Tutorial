import React from 'react';


function User({ user }) {
    return (
        <div>
            <b>{user.username}({user.email})</b>
        </div>
    )
}

function UserList({ users }) {
    return (
        <div>
            {
                users.map(
                    (person) => (<User user={person} key={person.id} />)
                )
            }
        </div>
    )
}

export default UserList;
