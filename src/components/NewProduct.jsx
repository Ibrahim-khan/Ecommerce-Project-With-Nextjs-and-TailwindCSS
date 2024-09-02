import React from 'react';
import ProductCard from './ProductCard';



const NewProduct = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className='font-medium text-2xl pb-4'>New Produts</h2>
      

        <div class="mx-20 mt-40 md:mt-56 mb-10">
            <div class="grid sm:grid-cols-2">
                <div class="lg:size-80">
                    <img src="./images/Images.png" alt="Food"/>
                </div>
                <div class="text-left ml-4 text-[#000000] tracking-[0.3]">
                    <h1 class="font-semibold text-[18px] sm:text-[32px]">
                        Take a taste, come join us. Life is so endlessly delicious
                    </h1>
                    <p class="my-5 text-[14px] sm:text-[18px]">
                        In the artist's own experience, of course, art is fundamentally indefinable, unsayable; there is something sacred about its demands upon the soul, something inherently mysterious in the forms it takes
                    </p>
                    <button class="bg-[#FF006E] mt-2 px-3 py-2 font-semibold hover:bg-slate-700 text-white rounded-3xl">Download our App</button>
                </div>
            </div>
        </div>


     
     
        </div>
      </div>
 
  )
}

export default NewProduct
