import React from 'react';
import Image from 'next/image';

const Certificate_Gallery = () => {
  return (
    <div className='w-full h-auto bg-gray-100'>
      <h1>Certificate & Gallery</h1>
      <div className='container pt-16 pb-16'>
        <div className="flex grid-cols-2 col-span-2">
          
          <div className="w-full space-y-5">
            <div className="flex space-x-5 justify-center">
              <Image
                className = "border border-gray-500 cursor-pointer hover:border-green-500"
                src="/certificate/bd_nutrition_food.jpeg"
                width={200}
                height={200}
                alt="dp"
              />
              <Image
                className = "border border-gray-500 cursor-pointer hover:border-green-500"
                src="/certificate/bdscience.jpeg"
                width={200}
                height={200}
                alt="dp"
              />
            </div>
            <div className="flex space-x-5 justify-center">
              <Image
                className = "border border-gray-500 cursor-pointer hover:border-green-500"
                src="/certificate/abdul_malek.jpeg"
                width={200}
                height={200}
                alt="dp"
              />
              <Image
                className = "border border-gray-500 cursor-pointer hover:border-green-500"
                src="/certificate/halal.jpeg"
                width={200}
                height={200}
                alt="dp"
              />
            </div>
          </div>

          <div className="w-full space-y-5">
            <div className="flex space-x-5 justify-center">
              <Image
                className = "border border-gray-500 cursor-pointer hover:border-green-500"
                src="/gallery/training.jpeg"
                width={200}
                height={200}
                alt="dp"
              />
              <Image
                className = "border border-gray-500 cursor-pointer hover:border-green-500"
                src="/gallery/cfmeet.jpeg"
                width={200}
                height={200}
                alt="dp"
              />
            </div>
            <div className="flex space-x-5 justify-center">
              <Image
                className = "border border-gray-500 cursor-pointer hover:border-green-500"
                src="/gallery/thysonmeet.jpeg"
                width={200}
                height={200}
                alt="dp"
              />
              <Image
                className = "border border-gray-500 cursor-pointer hover:border-green-500"
                src="/gallery/seminar.jpeg"
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

export default Certificate_Gallery
