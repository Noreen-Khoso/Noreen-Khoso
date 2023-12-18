import React from 'react';
import image1 from "../Assets/flower.jpg";
import image2 from "../Assets/flowers.jpg";

const HeroBar = () => {
  return (
    <>
      <div className= "flex flex-col items-start justify-start gap-2 md:flex-row  " >
        

        <div className=' flex flex-col items-start justify-center gap-4 mt-[10%] pl-[5%] md:text-center '>
          <h1 className=' text-3xl text-pink-500 font- fonnormalt-poppin md:font-bold'>FRESH FLOWERS</h1>
          
        <h1 className=' text-2xl font-poppin font-semibold '>Natural & Beautiful 
        <span className=' font-semibold text-4xl text-pink-500'> Flowers</span> </h1>
          
        <h1 className=' text-2xl font-semibold font-poppin '>Send Beautiful <span className=' font-semibold text-3xl text-pink-500'> Flowers</span> Today</h1>
          <p className=' text-start text-2xl font-normal'>  
          Brighter Someone’s day with our stunning flowers arrangments.</p>
          <div>
            <button className=' text-xl font-bold text-slate-300 bg-gray-900 px-4 py-2 rounded-full shadow-current hover:bg-transparent hover:text-black hover:border-2 border-pink-500'>Order Now</button>
          </div> 
        </div>
        {/* <div className=' flex flex-1 items-start justify-start h-[20%]'> */}
        <div className='flex flex-1  gap-4 items-start  md:flex-col'>
          <div className=' flex flex-row justify-center gap-4 '>

          <div className=' flex flex-row items-start justify-start  '>
          <img src={image1} alt="" className='  w-[100%] rounded-2xl mt-[80%]  '  />

          </div>

         
          <div className=' flex flex-col items-start justify-center gap-4 '>
           <img src={image2} alt="" className='   w-[80%] rounded-2xl mt-20' />
          <img src={image2} alt="" className='  w-[80%] rounded-2xl mr-20' />
          </div>
          </div>
          


        </div>
      </div>
    </>
  )
}

export default HeroBar;