import axios from "axios";
import { useState } from "react"

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');

    const auth = () => {
        if (!email || !password) return;
        axios.post('http://localhost:3001/login', {
            email: email.trim(),
            password: password.trim()
        })
        .then(({data}) => {
            console.log(data);
            
            Array.isArray(data) ? setLoginStatus('Authed') : setLoginStatus('НЕТ')
        });
        setEmail(''); setPassword('');
    }

    return <>
        <div className="input_div">
            <input
                autoFocus
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
            <button onClick={auth}>Login</button>
        </div>
        <h1>{loginStatus}</h1>
    </>;
}
