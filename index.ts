import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const db = mysql.createPool({
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


// reviews
{
    const table = 'movie_reviews';

    app.get('/reviews/get', (req, res) => {
        const sqlGet = `SELECT * FROM ${table}`;
        db.query(sqlGet, (err, result) => res.send(result));
    });

    app.post('/reviews/insert', (req, res) => {
        const { movieName, movieReview } = req.body;
        const sqlInsert = `INSERT INTO ${table} (movieName, movieReview) VALUES (?, ?)`;

        db.query(sqlInsert, [movieName, movieReview], (err, result) => console.log(result));
    });

    app.delete('/reviews/delete/:movieName', (req, res) => {
        const { movieName } = req.params;
        // ? мы ставим, чтобы в db.query передать этот параметр
        const sqlDelete = `DELETE FROM ${table} WHERE movieName = ?`;
        db.query(sqlDelete, movieName, (err, result) => {
            if (err) console.error(err);
        })
        res.send('delete')
    });

    app.put('/reviews/update', (req, res) => {
        const { movieName, movieReview } = req.body;
        const sqlUpdate = `UPDATE ${table} SET movieReview = ? WHERE movieName = ?`;

        db.query(sqlUpdate, [movieReview, movieName], (err, res) => {
            if (err) console.error(err);
        });
    });
}

// register
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
