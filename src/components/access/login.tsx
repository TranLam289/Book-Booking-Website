'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Handle login logic here
  };

  const handleRegister = () => {
    // Handle register logic here
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500'>
      <div className='bg-white p-8 rounded-lg shadow-2xl w-full max-w-md'>
        <h1 className='text-3xl font-extrabold mb-8 text-center text-gray-900'>
          Login
        </h1>
        <form onSubmit={handleLogin} className='space-y-6'>
          <div className='space-y-1'>
            <label
              htmlFor='username'
              className='block text-lg font-medium text-gray-700'
            >
              Username
            </label>
            <input
              type='text'
              id='username'
              placeholder='Enter your username'
              value={username}
              onChange={handleUsernameChange}
              className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
            />
          </div>
          <div className='space-y-1'>
            <label
              htmlFor='email'
              className='block text-lg font-medium text-gray-700'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              placeholder='Enter your email'
              value={email}
              onChange={handleEmailChange}
              className='w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent'
            />
          </div>
          <div className='space-y-1'>
            <label
              htmlFor='password'
              className='block text-lg font-medium text-gray-700'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              placeholder='Enter your password'
              value={password}
              onChange={handlePasswordChange}
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
              <button
                onClick={handleRegister}
                className='text-indigo-600 hover:text-indigo-800 font-semibold ml-1'
              >
                <Link href='/access/register'>Register</Link>
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
