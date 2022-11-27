import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

interface Iusers {
    userID: number;
    username: string;
    email: string;
    password: string;
}

export default function Users() {
    const [users, setUsers] = useState<Iusers[]>([]);
    const [authStatus, setAuthStatus] = useState('');

    useEffect(() => {
        axios('http://localhost:3001/users', {
            headers: {
                "access-token": Cookies.get('movieToken')
            }
        })
            .then(res => {
                // console.log(res);
                if ("message" in res.data) {
                    setAuthStatus(res.data.message)
                } else {
                    setUsers(res.data);
                    localStorage.setItem('isAuthed', 'true')
                }
            })
    }, [])

    return (
        <div className="users">
            {users.length ? users.map((el, idx) => (
                <div key={el.password} className="users_item">
                    <p>{el.username}</p>
                    <p>{el.email}</p>
                    <p>{el.password}</p>
                </div>
            )) : <h3>{authStatus}</h3>}
        </div>
    )
}
