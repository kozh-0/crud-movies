import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import cors from 'cors';
import reviewsRouter from './routes/reviews.js';
import usersRouter from './routes/user.js';


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
app.use('/users', usersRouter);



app.listen(port, () => console.log(`running on port ${port}`));
