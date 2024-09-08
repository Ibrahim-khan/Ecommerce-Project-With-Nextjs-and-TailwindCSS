import React from 'react';
import Image from 'next/image';

const Certificate_Gallery = () => {
  return (
    <div>
      <h1>Certificate & Gallery</h1>
      <div className='container pt-16 pb-16 grid-cols-2 col-span-2'>
        <div className="flex">
          <div className="certificate w-full space-y-5">
            <div className="certificateFirst flex space-x-5 justify-center">
              <Image
                className = "inline-block border border-gray-500 cursor-pointer hover:border-green-500"
                src="/certificate/bd_nutrition_food.jpeg"
                width={200}
                height={200}
                alt="dp"
              />
              <Image
                className = "inline-block border border-gray-500 cursor-pointer hover:border-green-500"
                src="/certificate/bdscience.jpeg"
                width={200}
                height={200}
                alt="dp"
              />
            </div>
            <div className="certificateSecond flex space-x-5 justify-center">
              <Image
                className = "inline-block border border-gray-500 cursor-pointer hover:border-green-500"
                src="/certificate/abdul_malek.jpeg"
                width={200}
                height={200}
                alt="dp"
              />
              <Image
                className = "inline-block border border-gray-500 cursor-pointer hover:border-green-500"
                src="/certificate/halal.jpeg"
                width={200}
                height={200}
                alt="dp"
              />
            </div>
          </div>

          <div className="certificate w-full space-y-5">
            <div className="certificateFirst flex space-x-5 justify-center">
              <Image
                className = "inline-block border border-gray-500 cursor-pointer hover:border-green-500"
                src="/gallery/training.jpg"
                width={200}
                height={200}
                alt="dp"
              />
              <Image
                className = "inline-block border border-gray-500 cursor-pointer hover:border-green-500"
                src="/gallery/cfmeet.jpg"
                width={200}
                height={200}
                alt="dp"
              />
            </div>
            <div className="certificateSecond flex space-x-5 justify-center">
              <Image
                className = "inline-block border border-gray-500 cursor-pointer hover:border-green-500"
                src="/gallery/thysonmeet.jpg"
                width={200}
                height={200}
                alt="dp"
              />
              <Image
                className = "inline-block border border-gray-500 cursor-pointer hover:border-green-500"
                src="/gallery/seminar.jpg"
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
