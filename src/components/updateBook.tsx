'use client';

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface Book {
  title: string;
  bookDesc: string;
  author: string;
  book_cover: string; // Assuming cover is a string URL
}

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);

  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get('http://localhost:7000/books');
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const bookId = location.pathname.split('/')[2];

  // console.log(books);

  const handleClick = async (e: any) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:7000/books/${bookId}`, books);
      // navigate('/');
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  // const handleDelete = async (id: number) => {
  //   try {
  //     await axios.delete(`http://localhost:7000/books/${id}`);
  //     window.location.reload();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleChange = (e: any) => {
    setBooks((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className='form'>
      <h1>Update the Book</h1>
      <input
        type='text'
        placeholder='Book title'
        name='title'
        onChange={handleChange}
      />
      <textarea
        rows={5}
        placeholder='Book desc'
        name='desc'
        onChange={handleChange}
      />
      <input
        type='number'
        placeholder='Book price'
        name='price'
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='Book cover'
        name='cover'
        onChange={handleChange}
      />
      <button onClick={handleClick}>Update</button>
      {error && 'Something went wrong!'}
      <Link href='/homepage'>See all books</Link>
    </div>
  );
};

export default Books;
