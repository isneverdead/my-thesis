import React from 'react';
import Image from 'next/image';
import { useEffect } from 'react';

const UserActivity = ({ activity }) => {
  useEffect(() => {
    console.log(activity);
  }, []);

  return (
    <div
      className='h-full flex flex-col rounded-md shadow-lg bg-white w-full'
      style={{ maxWidth: '400px', maxHeight: '80vh' }}
    >
      {/* todos profile */}
      <div className='w-full flex flex-row px-5 py-4'>
        <div className='border-4 border-white rounded-full overflow-hidden h-20 w-20'>
          <Image
            src='/me_avatar.jpg'
            width={200}
            height={250}
            alt='user-profile'
            //   className='border-4 border-gray-400 rounded-full'
          />
        </div>
        <div className='flex flex-col ml-5 items-start'>
          <h1 className='font-bold text-xl'>{activity.name}</h1>
          <p className='text-sm text-gray-400'>{activity.job}</p>
          <p className='text-base font-bold text-gray-800'>
            {`" ${activity.title} "`}
          </p>
        </div>
      </div>
      {/* todos profile end */}
      <div className='h-full w-full flex flex-col overflow-y-scroll scrollbar pr-5'>
        {/* todo item */}

        {activity.activities.map((todo) => {
          return (
            <div className={`flex flex-col`} key={todo.id}>
              <div className={`flex flex-row items-center w-full ml-5 mb-5`}>
                <div
                  className={`h-14 w-14 rounded-full flex justify-center items-center cursor-pointer black-background`}
                >
                  <span className={`font-bold text-xl text-white `}>
                    {todo.id}
                  </span>
                </div>
                <div className='flex flex-col ml-5 w-8/12 cursor-pointer'>
                  <p className={`font-bold `}>Makan</p>

                  <span className={`font-semibold text-sm text-gray-600 `}>
                    08:00 - 09:00
                  </span>
                </div>
              </div>
            </div>
          );
        })}

        {/* todo item end */}
      </div>
      <div className='flex flex-row justify-between bg-white rounded-b-md px-3 w-full py-2'>
        <div className='w-8/12 flex flex-col '>
          {/* star */}
          {activity.star.map((star) => (
            <div key={star.id} className='flex flex-row w-full items-center'>
              <span className='font-bold mr-1'>{star.id}</span>
              <Image
                src='/star_icon.svg'
                width={17}
                height={17}
                alt='star-icon'
              />
              <div className='w-9/12 h-2 bg-gray-200 rounded-lg mx-1'>
                <div
                  className='h-2 bg-gray-400 rounded-lg'
                  style={{ width: `${star.star}%` }}
                ></div>
              </div>
              <span className='font-semibold'>{star.star}%</span>
            </div>
          ))}
          {/* star end */}
        </div>
        <div className='w-3/12 flex flex-col justify-between items-center'>
          <span className='text-base font-bold'>Dipakai oleh</span>
          <span className='text-5xl font-bold'>38</span>
          <span className='text-base font-bold'>Orang</span>
        </div>
      </div>
    </div>
  );
};

export default UserActivity;
