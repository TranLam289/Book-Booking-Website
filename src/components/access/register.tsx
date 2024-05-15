'use client';
import Link from 'next/link';
import React, { use, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();

  const [values, setValues] = useState({
    username: '',
    email: '',
    pass: '',
    role_type: '',
  });

  // const handleChange = (e: any) => {
  //   const { name, value } = e.target;
  //   setValues((prevValues) => ({
  //     ...prevValues,
  //     [name]: value,
  //   }));
  // };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post('http://localhost:7000/register', values)
      .then((res) => {
        if (res.data.Status === 'User registered successfully') {
          router.push('/access/login');
        } else {
          alert('Registration failed');
        }
      })
      .then((err) => console.log(err));
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-6 text-center text-gray-800'>
          Register
        </h2>
        <form onSubmit={handleSubmit}>
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
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
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
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='password'>
              <strong>Password</strong>
            </label>
            <input
              type='text'
              placeholder='Enter your password'
              name='pass'
              onChange={(e) => setValues({ ...values, pass: e.target.value })}
              className='w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='role_type'>
              <strong>Role Type</strong>
            </label>
            <select
              name='book_status'
              onChange={(e) =>
                setValues({ ...values, role_type: e.target.value })
              }
              className='block w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
            >
              Select Your Role Type
              <option value='user'>User</option>
              <option value='admin'>Admin</option>
            </select>
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
