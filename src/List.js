import {useEffect, useState} from "react";

const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json'

export default function List({cbFunc}) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div className={'list'}>
            {users.map(user => {
                return (
                    <div key={user.id} className={'user'} data-id={user.id} onClick={cbFunc}>
                        {user.name}
                    </div>
                )
            })}
        </div>
    )
}