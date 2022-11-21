import axios from "axios";
import { useState } from "react";

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = () => {
        if (!username || !email || !password) return;
        axios.post('http://localhost:3001/register', {
            username: username.trim(),
            email: email.trim(),
            password: password.trim()
        })
            .then(res => console.log(res));
        setUsername(''); setEmail(''); setPassword('');
    }

    return <>
        <h2>Registration</h2>
        <div className="input_div">
            <input
                autoFocus
                type="text"
                placeholder="Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={register}>Register</button>
        </div>
    </>;
}
