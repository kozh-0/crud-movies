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
const table = 'movie_reviews';
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/get', (req, res) => {
    const sqlGet = `SELECT * FROM ${table}`;
    db.query(sqlGet, (err, result) => res.send(result));
});

app.post('/api/insert', (req, res) => {
    const { movieName, movieReview } = req.body;
    const sqlInsert = `INSERT INTO ${table} (movieName, movieReview) VALUES (?, ?)`;

    db.query(sqlInsert, [movieName, movieReview], (err, result) => console.log(result));
});

app.delete('/api/delete/:movieName', (req, res) => {
    const { movieName } = req.params;
    // ? мы ставим, чтобы в db.query передать этот параметр
    const sqlDelete = `DELETE FROM ${table} WHERE movieName = ?`;
    db.query(sqlDelete, movieName, (err, result) => {
        if (err) console.error(err);
    })
    res.send('delete')
});

app.put('/api/update', (req, res) => {
    const { movieName, movieReview } = req.body;
    const sqlUpdate = `UPDATE ${table} SET movieReview = ? WHERE movieName = ?`;

    db.query(sqlUpdate, [movieReview, movieName], (err, res) => {
        if (err) console.error(err);
    });
});



app.listen(port, () => console.log(`running on port ${port}`));

// app.get('/api', (req: Request, res: Response) => {
//     const sqlInsert = `INSERT INTO ${table} (movieName, movieReview) VALUES ('Inception', 'Good movie');`
//     db.query(sqlInsert, (err, result) => {
//         res.send({kek: 228});
//     });
// });
