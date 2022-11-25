import axios from "axios";
import { useState } from "react";

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [regStatus, setRegStatus] = useState('');

    const register = () => {
        if (username.length > 3 || !/\S+@\S+\.\S+/.test(email) || password.length > 5) {
            setRegStatus('Incorrect form!');
            return setTimeout(() => {
                setRegStatus('');
            }, 2000);
        }
        axios.post('http://localhost:3001/users/register', {
            username: username.trim(),
            email: email.trim(),
            password: password.trim()
        })
            .then(({ data }) => {
                setRegStatus(data);
            }).finally(() => {
                setTimeout(() => {
                    setRegStatus('');
                }, 2500);
                setUsername(''); setEmail(''); setPassword('');
            });
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
        {/* ХУЙНЯ КАКАЯ-ТО УПРОСТИ */}
        {/* {regStatus === "USER REGISTERED" ? ( */}
        {regStatus && <h3 style={regStatus === "USER REGISTERED" ? { color: '#00ff00' } 
        : { color: "red"}}>{regStatus}</h3>}
    </>;
}
