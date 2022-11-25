import express from "express";
import { db } from "..";

const reviewsRouter = express.Router();
const table = 'movie_reviews';


reviewsRouter.get('/get', (req, res) => {
    const sqlGet = `SELECT * FROM ${table}`;
    db.query(sqlGet, (err, result) => res.send(result));
});

reviewsRouter.post('/insert', (req, res) => {
    const { movieName, movieReview } = req.body;
    const sqlInsert = `INSERT INTO ${table} (movieName, movieReview) VALUES (?, ?)`;

    db.query(sqlInsert, [movieName, movieReview], (err, result) => console.log(result));
});

reviewsRouter.put('/update', (req, res) => {
    const { movieName, movieReview } = req.body;
    const sqlUpdate = `UPDATE ${table} SET movieReview = ? WHERE movieName = ?`;
    
    db.query(sqlUpdate, [movieReview, movieName], (err, res) => {
        if (err) console.error(err);
    });
});

reviewsRouter.delete('/delete/:movieName', (req, res) => {
    const { movieName } = req.params;
    // ? мы ставим, чтобы в db.query передать этот параметр
    const sqlDelete = `DELETE FROM ${table} WHERE movieName = ?`;
    db.query(sqlDelete, movieName, (err, result) => {
        if (err) console.error(err);
    })
    res.send('delete')
});

export default reviewsRouter;