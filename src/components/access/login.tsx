'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const router = useRouter();

  const [values, setValues] = useState({
    username: '',
    email: '',
    pass: '',
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post('http://localhost:7000/login', values)
      .then((res) => {
        if (res.data.Status === 'Login successful') {
          router.push('/');
        } else {
          alert('Login failed. Please try again');
        }
      })
      .then((err) => console.log(err));
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500'>
      <div className='bg-white p-8 rounded-lg shadow-2xl w-full max-w-md'>
        <h1 className='text-3xl font-extrabold mb-8 text-center text-gray-900'>
          Login
        </h1>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <div className='mb-4'>
            <label htmlFor='username'>
              <strong>User Name</strong>
            </label>
            <input
              type='text'
              placeholder='Enter your username'
              name='username'
              onChange={(e) =>
                setValues({ ...values, username: e.target.value })
              }
              className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='email'>
              <strong>Email</strong>
            </label>
            <input
              type='text'
              placeholder='Enter your email'
              name='email'
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='pass'>
              <strong>Password</strong>
            </label>
            <input
              type='password'
              placeholder='Enter your password'
              name='pass'
              onChange={(e) => setValues({ ...values, pass: e.target.value })}
              className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
            />
          </div>
          <div className='flex justify-between items-center'>
            <button
              type='submit'
              className='w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition duration-300'
            >
              Login
            </button>
          </div>
          <div className='text-center mt-4'>
            <p className='text-gray-600'>
              Don't have an account?
              <button className='text-indigo-600 hover:text-indigo-800 font-semibold ml-1'>
                <Link href='/access/register'>Register</Link>
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
