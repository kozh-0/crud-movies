import axios from "axios"
import { useEffect, useState } from "react"

interface Iusers {
    userID: number;
    username: string;
    email: string;
    password: string;
}

export default function Users() {
    const [users, setUsers] = useState<Iusers[]>([]);

    useEffect(() => {
        axios('http://localhost:3001/users')
            .then(({ data }) => setUsers(data))
    }, [])
    return (
        <div className="users">
            {users.map((el, idx) => (
                <div key={el.password} className="users_item">
                    <p>{el.username}</p>
                    <p>{el.email}</p>
                    <p>{el.password}</p>
                </div>
            ))}
        </div>
    )
}
