import express from "express";
import bcrypt from 'bcrypt';
import { db } from "../index.js";
const usersRouter = express.Router();

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
        // проверка на существование пользователя в БД
        if (!result[0]) return res.json({ message: 'There is no such user!' });
        // проверка на пароля у пользоваетеля
        const dbPassword = result[0].password;
        bcrypt.compare(password, dbPassword).then(match => {
            if (match) {
                res.json({message: 'Authed!'})
            } else {
                res.json({message: 'Wrong password'})
            }
        })
    });
});

usersRouter.get('/', (req, res) => {
    db.query('SELECT * FROM `crud server`.users', (err, result) => res.json(result))
});


export default usersRouter;