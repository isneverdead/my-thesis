import React from 'react';
import { useState } from 'react';
import Image from 'next/image';

const Sidebar = () => {
  const [menus, setMenus] = useState('home');
  return (
    <div className='w-fit h-full hidden sm:flex flex-col border-r-2 px-5'>
      <button
        className={`flex flex-row items-center py-1 px-3 mb-5 ${
          menus === 'home' ? 'rounded-lg shadow-lg bg-white' : ''
        }`}
        onClick={() => setMenus('home')}
      >
        <Image
          src={menus === 'home' ? '/home_icon.svg' : '/home_off_icon.svg'}
          alt='Home icon'
          width={24}
          height={24}
        />
        <p
          className={`ml-2 text-lg font-bold ${
            menus === 'home' ? 'text-on-color' : 'text-off-color'
          }`}
        >
          Home
        </p>
      </button>
      <button
        className={`flex flex-row items-center py-1 px-3 mb-5 ${
          menus === 'myActivity' ? 'rounded-lg shadow-lg bg-white' : ''
        }`}
        onClick={() => setMenus('myActivity')}
      >
        <Image
          src={
            menus === 'myActivity' ? '/task_on_icon.svg' : '/task_off_icon.svg'
          }
          alt='Task icon'
          width={24}
          height={24}
        />
        <p
          className={`ml-2 text-lg font-bold ${
            menus === 'myActivity' ? 'text-on-color' : 'text-off-color'
          }`}
        >
          My Activity
        </p>
      </button>
      <button
        className={`flex flex-row items-center py-1 px-3 mb-5 ${
          menus === 'explore' ? 'rounded-lg shadow-lg bg-white' : ''
        }`}
        onClick={() => setMenus('explore')}
      >
        <Image
          src={
            menus === 'explore' ? '/search_on_icon.svg' : '/search_off_icon.svg'
          }
          alt='Search icon'
          width={24}
          height={24}
        />
        <p
          className={`ml-2 text-lg font-bold ${
            menus === 'explore' ? 'text-on-color' : 'text-off-color'
          }`}
        >
          Explore
        </p>
      </button>
      <button
        className={`flex flex-row items-center py-1 px-3 mb-5 ${
          menus === 'profile' ? 'rounded-lg shadow-lg bg-white' : ''
        }`}
        onClick={() => setMenus('profile')}
      >
        <Image
          src={
            menus === 'profile' ? '/person_on_icon.svg' : '/person_off_icon.svg'
          }
          alt='Person icon'
          width={24}
          height={24}
        />
        <p
          className={`ml-2 text-lg font-bold ${
            menus === 'profile' ? 'text-on-color' : 'text-off-color'
          }`}
        >
          Profile
        </p>
      </button>
    </div>
  );
};

export default Sidebar;
