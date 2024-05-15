import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import jwt from 'jsonwebtoken';

const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Lamsql2023!',
  database: 'book_booking',
});

//
app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send('Book Booking BE is running...');
});

//GET ALL BOOKS
app.get('/books', (req, res) => {
  const sql = 'SELECT * FROM Book';

  // Run with DB - SQL query
  db.query(sql, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

//ADD BOOK
app.post('/books', (req, res) => {
  const q =
    'INSERT INTO Book (`title`, `bookDesc`, `author`, `book_cover`) VALUES (?)';
  const values = [
    req.body.title,
    req.body.bookDesc,
    req.body.price,
    req.body.cover,
  ];
  // Run with DB - SQL query
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json('Book has beeen added successfully');
  });
});

//DELETE BOOK
app.delete('/books/:book_id', (req, res) => {
  const bookId = req.params.book_id;
  const q = 'DELETE FROM Book WHERE book_id = ?';

  // Run with DB - SQL query
  db.query(q, [bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

//UPDATE BOOK
app.put('/books/:book_id', (req, res) => {
  const bookId = req.params.book_id;
  const q =
    'UPDATE Book SET `title`= ?,`bookDesc`= ?, `author`= ?, `book_cover`= ? WHERE book_id = ?';

  const values = [
    req.body.title,
    req.body.bookDesc,
    req.body.price,
    req.body.cover,
  ];

  // Run with DB - SQL query
  db.query(q, [...values, bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(7000, () => {
  console.log('Server is running on port 7000');
});
