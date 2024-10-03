import React from 'react'
import Image from 'next/image'

const Testimonials = () => {
  return (
    <div className='container pt-16 pb-16 grid-cols-2'>
        <div className='grid md:grid-cols-[300px,1fr] gap-4'>
            <div className='border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0'>
                <div className='text-center flex flex-col items-center gap-1'>
                    <Image
                        className = "rounded-full inline-block"
                        src="/khan.jpg"
                        width={80}
                        height={80}
                        alt="dp"
                    />
                    <h2 className='text-gray-500 font-black text-[20px]'>Md Ibrahim Khan</h2>
                    <p>Ambassador (Nutric Group)</p>
                    <Image
                    className='inline-block py-2'
                    src="/picture1.jpg"
                    width={30}
                    height={30}
                    alt="quotes"
                    />
                    <p className='max-w-[200px] text-gray-500'>
                        বায়ো স্প্রে প্লাস সম্পর্কে যেকোনো তথ্য পেতে যোগাযোগ করুনঃ<br /> +880 1742 095 986 <br />
                    </p>
                </div>
            </div>
                <div className='ml-10'>
                    <iframe className='h-[500px] rounded-2xl grid place-items-center w-full' src="https://www.youtube.com/embed/ovmdHhi1dMA" title="বায়ো স্প্রে প্লাস কোন কোন রোগের জন্য কাজ করে। Bio Spray Plus ।" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen/>
                </div>
        </div>
    </div>
  )
}

export default Testimonials
