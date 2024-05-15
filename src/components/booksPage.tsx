'use client';

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

interface Book {
  book_id: number;
  title: string;
  author: string;
  bookDesc: string;
  book_cover: string; // Assuming cover is a string URL
}

const Books = () => {
  const [books, setBooks] = useState<Book[]>([]);

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

  // console.log(books);

  const handleDelete = async (id: any) => {
    try {
      await axios.delete(`http://localhost:7000/books/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='container mx-auto p-6'>
      <h1 className='text-3xl font-bold mb-6'>Tokyo Book Shop</h1>

      <div className='mt-8 pb-8'>
        <Link href='/book-crud/add'>
          <div className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600'>
            Add new book
          </div>
        </Link>
      </div>

      <div className='overflow-y-auto max-h-[550px]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 '>
          {books.map((book) => (
            <div
              key={book.book_id}
              className='bg-white rounded-lg shadow-md p-6'
            >
              <img
                src={book.book_cover}
                alt=''
                className='w-full h-48 object-cover mb-4'
              />
              <h2 className='text-xl font-bold mb-2'>{book.title}</h2>
              <p className='text-gray-700 mb-4'>{book.bookDesc}</p>
              <span className='text-lg font-semibold text-blue-500'>
                {book.author}
              </span>
              <div className='mt-4'>
                <button
                  onClick={() => handleDelete(book.book_id)}
                  className='bg-red-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-red-600 focus:outline-none focus:bg-red-600'
                >
                  Delete
                </button>
                <Link href={`/book-crud/update/${book.book_id}`}>
                  <div className='text-blue-500 hover:underline py-4'>
                    Update
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
