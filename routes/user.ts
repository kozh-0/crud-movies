import express from "express";
import bcrypt from 'bcrypt';
import { db } from "../index.js";
const usersRouter = express.Router();
import { createTokens, validateToken } from "../JWT.js";


const table = 'users';


usersRouter.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    bcrypt.hash(password, 5).then(hash => {
        console.log(hash);

        const sqlReg = `INSERT INTO ${table} (username, email, password) VALUES (?,?,?)`;
        db.query(sqlReg, [username, email, hash], (err, result) => console.log(err));
    }).then(() => res.json('USER REGISTERED'))
});

usersRouter.post('/login', (req, res) => {
    const { email, password } = req.body;
    db.query(`SELECT * FROM \`crud server\`.users WHERE email = '${email}'`, (err, result) => {
        const user = result[0];
        
        // проверка на существование пользователя в БД
        if (!user) return res.json({ message: 'There is no such user!' });
        // проверка на пароля у пользоваетеля
        const dbPassword = user.password;
        bcrypt.compare(password, dbPassword).then(match => {
            if (match) {
                const accessToken = createTokens(user);
                //куки испарятся через 30 дней
                res.cookie("access-token", accessToken, {
                    maxAge: 60*60*24*30*1000,
                    httpOnly: true
                })
                res.json({ message: 'Authed!', accessToken });
            } else {
                res.json({message: 'Wrong password'})
            }
        })
    });
});

usersRouter.get('/', validateToken, (req, res) => {
    db.query('SELECT * FROM `crud server`.users', (err, result) => res.json(result))
});


export default usersRouter;