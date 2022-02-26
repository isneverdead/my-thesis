import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import UserActivity from '../components/UserActivity';

const Explore = () => {
  const [enableBell, setEnableBell] = useState(false);
  // const [menus, setMenus] = useState('home');
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn Next.js' },
    { id: 2, text: 'Learn Next.js' },
    { id: 3, text: 'Learn Next.js' },
    { id: 4, text: 'Learn Next.js' },
    { id: 5, text: 'Learn Next.js' },
    { id: 6, text: 'Learn Next.js' },
    { id: 7, text: 'Learn Next.js' },
    { id: 8, text: 'Learn Next.js' },
    { id: 9, text: 'Learn Next.js' },
    { id: 10, text: 'Learn Next.js' },
    { id: 11, text: 'Learn Next.js' },
    { id: 12, text: 'Learn Next.js' },
    { id: 13, text: 'Learn Next.js' },
    { id: 14, text: 'Learn Next.js' },
  ]);
  const [star, setStar] = useState([
    { id: 1, star: 2 },
    { id: 2, star: 3 },
    { id: 3, star: 10 },
    { id: 4, star: 5 },
    { id: 5, star: 80 },
  ]);

  const [userActivities, setUserActivities] = useState([
    {
      id: 1,
      name: 'John Doe',
      job: 'Frontend Developer',
      title: 'Fokus bikin skripsi',
      star: [
        { id: 1, star: 2 },
        { id: 2, star: 3 },
        { id: 3, star: 10 },
        { id: 4, star: 5 },
        { id: 5, star: 80 },
      ],
      activities: [
        { id: 1, text: 'Learn Next.js' },
        { id: 2, text: 'Learn Next.js' },
        { id: 3, text: 'Learn Next.js' },
        { id: 4, text: 'Learn Next.js' },
        { id: 5, text: 'Learn Next.js' },
        { id: 6, text: 'Learn Next.js' },
        { id: 7, text: 'Learn Next.js' },
        { id: 8, text: 'Learn Next.js' },
        { id: 9, text: 'Learn Next.js' },
        { id: 10, text: 'Learn Next.js' },
        { id: 11, text: 'Learn Next.js' },
        { id: 12, text: 'Learn Next.js' },
        { id: 13, text: 'Learn Next.js' },
        { id: 14, text: 'Learn Next.js' },
      ],
    },
    {
      id: 2,
      name: 'John Doe',
      job: 'Frontend Developer',
      title: 'Fokus bikin skripsi',
      star: [
        { id: 1, star: 2 },
        { id: 2, star: 3 },
        { id: 3, star: 10 },
        { id: 4, star: 5 },
        { id: 5, star: 80 },
      ],
      activities: [
        { id: 1, text: 'Learn Next.js' },
        { id: 2, text: 'Learn Next.js' },
        { id: 3, text: 'Learn Next.js' },
        { id: 4, text: 'Learn Next.js' },
        { id: 5, text: 'Learn Next.js' },
        { id: 6, text: 'Learn Next.js' },
        { id: 7, text: 'Learn Next.js' },
        { id: 8, text: 'Learn Next.js' },
        { id: 9, text: 'Learn Next.js' },
        { id: 10, text: 'Learn Next.js' },
        { id: 11, text: 'Learn Next.js' },
        { id: 12, text: 'Learn Next.js' },
        { id: 13, text: 'Learn Next.js' },
        { id: 14, text: 'Learn Next.js' },
      ],
    },
    {
      id: 3,
      name: 'John Doe',
      job: 'Frontend Developer',
      title: 'Fokus bikin skripsi',
      star: [
        { id: 1, star: 2 },
        { id: 2, star: 3 },
        { id: 3, star: 10 },
        { id: 4, star: 5 },
        { id: 5, star: 80 },
      ],
      activities: [
        { id: 1, text: 'Learn Next.js' },
        { id: 2, text: 'Learn Next.js' },
        { id: 3, text: 'Learn Next.js' },
        { id: 4, text: 'Learn Next.js' },
        { id: 5, text: 'Learn Next.js' },
        { id: 6, text: 'Learn Next.js' },
        { id: 7, text: 'Learn Next.js' },
        { id: 8, text: 'Learn Next.js' },
        { id: 9, text: 'Learn Next.js' },
        { id: 10, text: 'Learn Next.js' },
        { id: 11, text: 'Learn Next.js' },
        { id: 12, text: 'Learn Next.js' },
        { id: 13, text: 'Learn Next.js' },
        { id: 14, text: 'Learn Next.js' },
      ],
    },
    {
      id: 4,
      name: 'John Doe',
      job: 'Frontend Developer',
      title: 'Fokus bikin skripsi',
      star: [
        { id: 1, star: 2 },
        { id: 2, star: 3 },
        { id: 3, star: 10 },
        { id: 4, star: 5 },
        { id: 5, star: 80 },
      ],
      activities: [
        { id: 1, text: 'Learn Next.js' },
        { id: 2, text: 'Learn Next.js' },
        { id: 3, text: 'Learn Next.js' },
        { id: 4, text: 'Learn Next.js' },
        { id: 5, text: 'Learn Next.js' },
        { id: 6, text: 'Learn Next.js' },
        { id: 7, text: 'Learn Next.js' },
        { id: 8, text: 'Learn Next.js' },
        { id: 9, text: 'Learn Next.js' },
        { id: 10, text: 'Learn Next.js' },
        { id: 11, text: 'Learn Next.js' },
        { id: 12, text: 'Learn Next.js' },
        { id: 13, text: 'Learn Next.js' },
        { id: 14, text: 'Learn Next.js' },
      ],
    },
    {
      id: 5,
      name: 'John Doe',
      job: 'Frontend Developer',
      title: 'Fokus bikin skripsi',
      star: [
        { id: 1, star: 2 },
        { id: 2, star: 3 },
        { id: 3, star: 10 },
        { id: 4, star: 5 },
        { id: 5, star: 80 },
      ],
      activities: [
        { id: 1, text: 'Learn Next.js' },
        { id: 2, text: 'Learn Next.js' },
        { id: 3, text: 'Learn Next.js' },
        { id: 4, text: 'Learn Next.js' },
        { id: 5, text: 'Learn Next.js' },
        { id: 6, text: 'Learn Next.js' },
        { id: 7, text: 'Learn Next.js' },
        { id: 8, text: 'Learn Next.js' },
        { id: 9, text: 'Learn Next.js' },
        { id: 10, text: 'Learn Next.js' },
        { id: 11, text: 'Learn Next.js' },
        { id: 12, text: 'Learn Next.js' },
        { id: 13, text: 'Learn Next.js' },
        { id: 14, text: 'Learn Next.js' },
      ],
    },
  ]);

  // const [showTodoMenu, setShowTodoMenu] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState({
    todoId: 0,
    menuOpen: false,
  });
  return (
    <div className='h-screen w-full flex flex-col background-color md:px-10 font-sans overflow-y-scroll scrollbar'>
      <Head>
        {/* <html lang='en' /> */}
        <title>Explore</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* navbar */}
      <div className='w-full flex flex-row justify-between px-5 py-3'>
        <span>
          <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
        </span>
        <div className='w-1/3 flex flex-row justify-end pr-10'>
          <button
            aria-label='notifications'
            className='flex flex-row items-center py-1 px-2 cursor-pointer'
          >
            <Image
              src={enableBell ? '/bell_on_icon.svg' : '/bell_off_icon.svg'}
              alt='Bell icon'
              width={24}
              height={24}
              onClick={() => setEnableBell(!enableBell)}
            />
          </button>

          <div className='h-8 border-r-2 border-black mx-3'></div>
          <button
            aria-label='settings'
            className='flex flex-row items-center py-1 pl-3 pr-10'
          >
            <Image
              src='/settings_icon.svg'
              alt='Login icon'
              width={24}
              height={24}
            />
            <div className='h-8 w-8 flex overflow-hidden rounded-full ml-6'>
              <Image
                src='/me_avatar.jpg'
                alt='avatar icon'
                width={500}
                height={617}
              />
            </div>

            <p className='ml-2 text-lg font-bold'>Fariz Akbar</p>
          </button>
        </div>
      </div>
      {/* navbar end */}
      {/* card */}

      <main className='w-full h-full  mb-10 p-3 flex flex-row'>
        {/* sidebar */}
        <Sidebar />
        {/* sidebar end */}
        {/* main content */}
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-flow-row gap-4 h-full w-full sm:w-7/12 md:w-8/12 lg:w-9/12 xl:w-10/12  sm:px-10'>
          {/* todos */}

          {userActivities.map((userActivity) => (
            <UserActivity activity={userActivity} key={userActivity.id} />
          ))}
          {/* todos end */}
        </div>
        {/* main content end */}
      </main>
      {/* card end */}
    </div>
  );
};

export default Explore;
