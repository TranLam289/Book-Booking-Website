'use client';

import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

const Add = () => {
  const [book, setBook] = useState({
    title: '',
    bookDesc: '',
    author: null,
    book_cover: '',
    book_status: '',
  });
  const [error, setError] = useState(false);

  const [success, setSuccess] = useState(false);

  // const navigate = useNavigate();

  const handleChange = (e: any) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:7000/books', book);
      setSuccess(true);
      setError(false);
      //  navigate('/');
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className='form max-w-lg mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-md'>
      <h1 className='text-2xl font-bold mb-4'>Add New Book</h1>
      <input
        type='text'
        placeholder='Book title'
        name='title'
        onChange={handleChange}
        className='block w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
      />
      <textarea
        rows={5}
        placeholder='Book description'
        name='bookDesc'
        onChange={handleChange}
        className='block w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
      />
      {/* */}
      <input
        type='text'
        placeholder='Author'
        name='author'
        onChange={handleChange}
        className='block w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
      />
      <input
        type='text'
        placeholder='Book cover'
        name='book_cover'
        onChange={handleChange}
        className='block w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
      />
      <select
        name='book_status'
        onChange={handleChange}
        className='block w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
      >
        <option value=''>Select book status</option>
        <option value='Available'>Available</option>
        <option value='Not Available'>Not Available</option>
      </select>
      {success && <p className='text-green-600 mt-2'>Added Successfully</p>}
      <button
        onClick={handleClick}
        className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-600'
      >
        Add
      </button>
      {error && <p className='text-red-500 mt-2'>Something went wrong!</p>}
      <p className='mt-4'>
        <Link href='/' className='text-blue-500 hover:underline'>
          See all books
        </Link>
      </p>
    </div>
  );
};

export default Add;
