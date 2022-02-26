import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import loginBanner from '../public/login_banner.png';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='h-screen w-full flex flex-col background-color px-10 font-sans'>
      <Head>
        <title>Login</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* navbar */}
      <div className='w-full flex flex-row justify-between px-5 py-3'>
        <span>
          <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
        </span>
        <div className='w-1/3 flex flex-row justify-end pr-10'>
          <button className='flex flex-row items-center py-1 pl-3 pr-10 rounded-lg shadow-lg bg-white '>
            <Image
              src='/home_icon.svg'
              alt='Home icon'
              width={24}
              height={24}
            />
            <p className='ml-2 text-lg font-bold'>Home</p>
          </button>
          <div className='h-8 border-r-2 border-black mx-3'></div>
          <button className='flex flex-row items-center py-1 pl-3 pr-10 rounded-lg shadow-lg bg-white '>
            <Image
              src='/login_icon.svg'
              alt='Login icon'
              width={24}
              height={24}
            />
            <p className='ml-2 text-lg font-bold'>Register</p>
          </button>
        </div>
      </div>
      {/* navbar end */}
      {/* card */}

      <main className='w-full h-full card-glass-background login-card-radius border-4 border-white mt-5 mb-10 p-3 flex flex-row'>
        <div className='hidden md:block md:w-1/2 h-full login-card-radius overflow-hidden flex-row justify-center items-center'>
          {/* <Image
            alt='Mountains'
            src={loginBanner}
            // layout='responsive'
            // objectFit='cover'
            width={loginBanner.width}
            height={loginBanner.height}
          /> */}
          <Image
            src='/login_banner.png'
            alt='Login Banner'
            layout='responsive'
            width={800}
            height={600}
          />
        </div>
        <div className='w-full md:w-1/2 h-full flex flex-col  items-center md:px-20 xl:px-40 justify-center'>
          <h1 className='text-4xl font-bold'>Masuk</h1>

          <input
            type='text'
            className='w-full shadow-xl input-field-radius  h-14 px-4 mb-5 mt-10'
            placeholder='Email kamu'
          />
          <div className='relative w-full shadow-xl input-field-radius h-14  mb-1 flex flex-row items-center'>
            <input
              type={showPassword ? 'text' : 'password'}
              className='w-full shadow-xl input-field-radius  h-14 px-4 '
              placeholder='Password'
            />
            <button
              className={`absolute right-6 pt-1 ${
                showPassword ? 'hidden' : ''
              }`}
              onClick={() => setShowPassword(true)}
            >
              <Image
                src='/eye_closed_icon.svg'
                alt='Login icon'
                width={25}
                height={25}
              />
            </button>
            <button
              className={`absolute right-6 pt-1 ${
                showPassword ? '' : 'hidden'
              }`}
              onClick={() => setShowPassword(false)}
            >
              <Image
                src='/eye_open_icon.svg'
                alt='Login icon'
                width={25}
                height={25}
              />
            </button>
          </div>
          <div className='w-full flex flex-row justify-end mb-16 cursor-pointer'>
            <span className='text-gray-400'>Lupa password?</span>
          </div>

          <button className='w-full shadow-xl input-field-radius  h-14 px-4 mb-5 button-black-color text-white text-xl font-bold'>
            Masuk
          </button>
          <div className='w-full px-5 h-10 relative flex flex-row justify-center items-center mb-5'>
            <div className='w-full bg-white rounded-xl h-1'></div>
            <span className='absolute  or-login-background px-3 font-semibold'>
              {' '}
              Atau masuk dengan
            </span>
          </div>
          <button className='flex flex-row items-center py-2 px-16 rounded-xl shadow-lg bg-white border-4'>
            <Image
              src='/google_icon.svg'
              alt='Login icon'
              width={24}
              height={24}
            />
          </button>
        </div>
      </main>
      {/* card end */}
    </div>
  );
};

export default Login;