import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');
    
    

    const signIn = () => {
        if (!email || !password) return;
        axios.post('http://localhost:3001/users/login', {
            email: email.trim(),
            password: password.trim()
        })
            .then(({ data }) => {
                console.log(data);
                setLoginStatus(data.message);
                if (!data.accessToken) return;
                Cookies.set('movieToken', data.accessToken, { expires: 1 })
                window.location.href = 'http://localhost:3000/crud-movies';
            })
            .finally(() => setTimeout(() => setLoginStatus(''), 2000));
    }

    return <>
        <h2>Login</h2>
        <form className="input_div" onSubmit={(e) => e.preventDefault()}>
            <input
                autoFocus
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
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signIn}>Login</button>
        </form>
        {loginStatus && <h2 style={loginStatus === 'Authed!' ? { color: '#00ff00' } : { color: 'red' }}>{loginStatus}</h2>}
    </>;
}
