import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import cors from 'cors';

import reviewsRouter from './routes/reviews';


const app = express();
export const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'crud server'
});
const port = 3001;
// Вроде как безопасный протокол передачи данных
app.use(cors());
// авто парс json
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/reviews', reviewsRouter);


// login & register
{
    const table = 'users';
    app.post('/register', (req, res) => {
        const { username, email, password } = req.body;

        const sqlReg = `INSERT INTO ${table} (username, email, password) VALUES (?,?,?)`;
        db.query(sqlReg, [username, email, password], (err, result) => console.log(err));
    });

    app.post('/login', (req, res) => {
        const { email, password } = req.body;

        const sqlLogin = `SELECT * FROM ${table} WHERE email = ? AND password = ?`;
        db.query(sqlLogin, [email, password], (err, result) => {
            console.log(email, password);
            
            if (err) res.send({ err });

            result.length > 0 ? res.send(result) : res.send({ message: 'There is no such user!' });
        });
    });
}


app.listen(port, () => console.log(`running on port ${port}`));
