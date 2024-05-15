'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    pass: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios.post('http://localhost:7000/register', values);
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-6 text-center text-gray-800'>
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label
              htmlFor='username'
              className='block text-gray-700 font-semibold mb-2'
            >
              Username:
            </label>
            <input
              type='text'
              id='username'
              value={values.username}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='block text-gray-700 font-semibold mb-2'
            >
              Email:
            </label>
            <input
              type='email'
              id='email'
              value={values.email}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='password'
              className='block text-gray-700 font-semibold mb-2'
            >
              Password:
            </label>
            <input
              type='password'
              id='password'
              value={values.pass}
              onChange={handleChange}
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-300'
          >
            Register
          </button>

          <div className='text-black flex justify-center items-center py-2'>
            {' '}
            Already have an account?
          </div>

          <div className='py-4'>
            <button
              type='submit'
              className='bg-green-500 text-white font-semibold py-2 rounded-md hover:bg-green-600 transition duration-300 inline-block w-full'
            >
              <Link href='/access/login'>
                <div>Login</div>
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
