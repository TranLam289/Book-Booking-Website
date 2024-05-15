import React from 'react';
import Register from '../access/register';
import Link from 'next/link';

const header = () => {
  return (
    <div className='px-6 pt-4 flex flex-row'>
      <div>
        <Link href='/access/register'>
          <p className='text-white bg-blue-600 inline-block justify-end '>
            Register
          </p>
        </Link>
      </div>

      <div className='px-6'>
        <Link href='/access/login'>
          <p className='text-white bg-orange-500 inline-block justify-end '>
            Login
          </p>
        </Link>
      </div>
    </div>
  );
};

export default header;
