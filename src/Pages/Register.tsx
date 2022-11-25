import axios from "axios";
import { useState } from "react";

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [regStatus, setRegStatus] = useState('');

    const register = () => {
        if (!username || !/\S+@\S+\.\S+/.test(email) || !password) {
            setRegStatus('Incorrect form!');
            return setTimeout(() => {
                 setRegStatus('');
            }, 3000);
        } 
        axios.post('http://localhost:3001/register', {
            username: username.trim(),
            email: email.trim(),
            password: password.trim()
        })
        .then(({data}) => {
            setRegStatus(data);
            setTimeout(() => {
                setRegStatus('');
            }, 3000);
        });
        setUsername(''); setEmail(''); setPassword('');
    }

    return <>
        <h2>Registration</h2>
        <form className="input_div" onSubmit={(e) => e.preventDefault()}>
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
                autoComplete="username"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                autoComplete="new-password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={register}>Register</button>
        </form>
        {regStatus === "USER REGISTERED" ? (
            <h3 style={{ color: '#00ff00', textAlign: 'center' }}>{regStatus}</h3>
        ) : (
            <h3 style={{ color: 'red', textAlign: 'center' }}>{regStatus}</h3>
        )}
    </>;
}
