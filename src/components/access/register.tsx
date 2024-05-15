'use client';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Register() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e: any) => {
    setValues((values) => ({ ...values, [e.target.username]: e.target.value }));
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-6 text-center text-gray-800'>
          Register
        </h2>
        <form>
          <div className='mb-4'>
            <label
              htmlFor='username'
              onChange={handleChange}
              className='block text-gray-700 font-semibold mb-2'
            >
              Username:
            </label>
            <input
              type='text'
              id='username'
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
