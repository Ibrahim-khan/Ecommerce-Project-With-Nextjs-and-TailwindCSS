import React from 'react';
import Image from 'next/image';

const Testimony_Picture = () => {
  return (
    <div className='w-full h-auto'>
      <h1>Testimony</h1>
      <div className='container pt-16 pb-16'>
        <div className="flex grid-cols-4 col-span-4">
          
          <div className="w-full space-y-5">
            <div className="flex space-x-10 justify-center">
              <Image
                className = "border border-gray-500 cursor-pointer hover:border-green-500"
                src="/testimony/gangrine.jpg"
                width={200}
                height={200}
                alt="dp"
              />
              <Image
                className = "border border-gray-500 cursor-pointer hover:border-green-500"
                src="/testimony/brest.jpg"
                width={200}
                height={200}
                alt="dp"
              />
              <Image
                className = "border border-gray-500 cursor-pointer hover:border-green-500"
                src="/testimony/heart.jpg"
                width={200}
                height={200}
                alt="dp"
              />
              <Image
                className = "border border-gray-500 cursor-pointer hover:border-green-500"
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
