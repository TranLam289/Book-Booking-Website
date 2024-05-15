import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';

const salt = 10;
const app = express();
app.use(cookieParser());

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
    'INSERT INTO Book (`title`, `bookDesc`, `author`, `book_cover` , `book_status`) VALUES (?)';
  const values = [
    req.body.title,
    req.body.bookDesc,
    req.body.author,
    req.body.book_cover,
    req.body.book_status,
  ];
  // Run with DB - SQL query
  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
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

//Register
app.post('/register', (req, res) => {
  const sql =
    'INSERT INTO users (`username`, `email`, `pass`, `role_type`) VALUES (?)';

  bcrypt.hash(req.body.pass.toString(), salt, (err, hash) => {
    if (err) return res.json({ Error: 'Errror for hashing password' });

    const values = [
      req.body.username,
      req.body.email,
      hash,
      req.body.role_type,
    ];

    db.query(sql, [values], (err, data) => {
      if (err) return res.json({ Error: ' Inserting data error in server' });
      return res.json({ Status: 'User registered successfully' });
    });
  });
});

//Login
app.post('/login', (req, res) => {
  const sql = 'SELECT * FROM users WHERE email = ?';

  db.query(sql, [req.body.email], (err, data) => {
    if (err) return res.json({ Error: 'Error in server' });
    if (data.length > 0) {
      bcrypt.compare(req.body.pass.toString(), data[0].pass, (err, result) => {
        if (err) return res.json({ Error: 'Error in comparing password' });

        if (result) {
          return res.json({ Status: 'Login successful' });
        } else {
          return res.json({ Error: 'Password not matched' });
        }
      });
    } else {
      return res.json({ Error: 'User not found' });
    }
  });
});

app.listen(7000, () => {
  console.log('Server is running on port 7000');
});
