import React from 'react';
import Image from 'next/image';

const Testimony_Picture = () => {
  return (
    <div className='w-full h-auto'>
      <h1 className='text-center font-semibold text-[30px]'>Testimony</h1>
      <div className='container pt-16 pb-16'>
        <div className="flex grid-cols-4 col-span-4">
          
          <div className="w-full space-y-5">
            <div className="flex space-x-10 justify-center">
              <Image
                className = "border border-gray-500 cursor-pointer shadow-lg shadow-slate-300 rounded-lg transform transition duration-500 hover:scale-125"
                src="/testimony/gangrine.jpg"
                width={200}
                height={200}
                alt="dp"
              />
              <Image
                className = "border border-gray-500 cursor-pointer shadow-lg shadow-slate-300 rounded-lg transform transition duration-500 hover:scale-125"
                src="/testimony/brest.jpg"
                width={200}
                height={200}
                alt="dp"
              />
              <Image
                className = "border border-gray-500 cursor-pointer shadow-lg shadow-slate-300 rounded-lg transform transition duration-500 hover:scale-125"
                src="/testimony/heart.jpg"
                width={200}
                height={200}
                alt="dp"
              />
              <Image
                className = "border border-gray-500 cursor-pointer shadow-lg shadow-slate-300 rounded-lg transform transition duration-500 hover:scale-125"
                src="/testimony/beauty.jpg"
                width={200}
                height={200}
                alt="dp"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Testimony_Picture
