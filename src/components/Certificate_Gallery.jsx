import React from 'react';
import Image from 'next/image';

const Certificate_Gallery = () => {
  return (
    <div>
      <h1>Certificate & Gallery</h1>
      <div className='container pt-16 pb-16 grid-cols-2 col-span-2'>
        <div className="flex">
          <div className="certificate w-full">
            <div className="certificateFirst flex space-x-5 justify-center">
              <Image
                className = "inline-block"
                src="/khan.jpg"
                width={200}
                height={200}
                alt="dp"
              />
              <Image
                className = "inline-block"
                src="/khan.jpg"
                width={200}
                height={200}
                alt="dp"
              />
            </div>
            <div className="certificateSecond flex space-x-5 space-y-5 justify-center">
              <Image
                className = "inline-block"
                src="/khan.jpg"
                width={200}
                height={200}
                alt="dp"
              />
              <Image
                className = "inline-block"
                src="/khan.jpg"
                width={200}
                height={200}
                alt="dp"
              />
            </div>
          </div>

          <div className="certificate w-full">
            <div className="certificateFirst flex space-x-5 justify-center">
              <Image
                className = "inline-block"
                src="/khan.jpg"
                width={200}
                height={200}
                alt="dp"
              />
              <Image
                className = "inline-block"
                src="/khan.jpg"
                width={200}
                height={200}
                alt="dp"
              />
            </div>
            <div className="certificateSecond flex space-x-5 space-y-5 justify-center">
              <Image
                className = "inline-block"
                src="/khan.jpg"
                width={200}
                height={200}
                alt="dp"
              />
              <Image
                className = "inline-block"
                src="/khan.jpg"
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
