import { IoMenu } from "react-icons/io5";

import logo from "./Assets/FLOWERY.COM.png"
import image from "./Assets/flo.png"



function App() {
  return (
    <>
      <div className=" h-screen bg-gradient-to-t from-red-400 to-red-100 tracking-wider ">
        <nav className="  ">
          <div className=" container flex items-center justify-between    ">
            <div className="  flex flex-1 items-center gap-2 py-4" >
              <img src={logo} alt="logo" className=" h-10 w-10 rounded-full" />
              <span className=" font-semibold text-2xl">Flowery.com</span>


            </div>
            <div>
              <ul className=" hidden lg:flex items-center space-x-6 text-xl font-bold">
                <li className=" hover:text-pink-600 ease-in duration-200 cursor-pointer ">Home</li>
                <li className=" hover:text-pink-600 ease-in duration-200 cursor-pointer">About</li>
                <li className=" hover:text-pink-600 ease-in duration-200 cursor-pointer">Product</li>
                <li className=" hover:text-pink-600 ease-in duration-200 cursor-pointer">Reviews</li>
                <li className=" hover:text-pink-600 ease-in duration-200 cursor-pointer">Contacts</li>

              </ul>
            </div>
            <div className="hidden lg:flex flex-1 items-start justify-center">

              <button className=" px-10 py-2 capitalize text-slate-300  rounded-full bg-slate-800 font-bold hover:bg-transparent hover:text-pink-700 hover:border  border-pink-700 ease-in duration-200">Log in</button>
            </div>

          </div>
          {/* for the mobile screen */}

          <div className="  lg:hidden cursor-pointer z-50">
            <IoMenu id="menu" size={30} />
          </div>
          <div className=" hidden h-[100vh] absolute inset-0 bg-indigo-950">
            <ul className=" h-full grid place-item-center py-20">
              <li className=" hover:text-pink-600 ease-in duration-200 cursor-pointer ">Home</li>
              <li className=" hover:text-pink-600 ease-in duration-200 cursor-pointer">About</li>
              <li className=" hover:text-pink-600 ease-in duration-200 cursor-pointer">Product</li>
              <li className=" hover:text-pink-600 ease-in duration-200 cursor-pointer">Reviews</li>
              <li className=" hover:text-pink-600 ease-in duration-200 cursor-pointer">Contacts</li>

            </ul>
          </div>
        </nav>
        {/* home page */}
        <section className="">
          <div className=" container py-20 ">
            <div className=" flex flex-col z-20 items-center md:flex-row  mt-20 ">
            
              <div className=" text-center mb-12 md:text-start md:pr-10 md:w-1/2 leading-normal">
              <h1 className=' text-4xl md:text-5xl font-semibold text-pink-600 leading-normal'>FRESH FLOWERS</h1>
          
          <h1 className='  text-slate-900  text-3xl md:text-4xl font-semibold leading-normal mt-3  '>Natural & <span className="bg-gradient-to-tr  from-pink-600 to-pink-100 text-pink-700 rounded-full">Beautiful Flowers</span> </h1>
            
          <h1 className=' text-slate-900  text-2xl md:text-4xl font-bold leading-normal mt-3'>Send Beautiful <span className=' font-bold text-2xl  md:text-4xl leading-normal text-pink-600 bg-gradient-to-tr  from-pink-400 to-pink-100 rounded-full'> Flowers</span> Today</h1>
            <p className='text-center md:text-start text-lg md:text-2xl  text-slate-900 font-bold mt-2'>  
            Brighter Someone’s day with our stunning flowers arrangments.</p>
            <div className=" items-center md:flex mt-5">

            <button className=" px-10 py-2 capitalize text-slate-300  rounded-full bg-slate-800 font-bold hover:bg-transparent hover:text-pink-700 hover:border  border-pink-700 ease-in duration-200">Order Now</button>
            </div>
              </div>
              <div className="w-full  xl:absolute bottom-10 top-20 right-0  xl:w-1/2">
            <img src={image} alt="" />
            </div>
            </div>

          </div>
 
        </section>
        {/* about section */}
        <section className=" bg-gradient-to-t from-slate-300 to-slate-200 top-0 ">
        
            
              <div className=" py-20 text-center mb-12 md:text-start md:pr-10 leading-normal pl-20">

              <h1 className="  text-center text-6xl font-bold md:text-start px-10 ">About </h1>
              <p className=" text-left md:text-start mt-10 text-2xl md:text-3xl font-normal px-10 md:px-10">
                Welcome to flowery.com, your priemer destination for all things florals in [xyz city].
                With a passion for flower and a commitment to excellence, we strive to provide our customers with the finest selection of blooms and exceptional service
              </p>
              <p className="  text-left md:text-start mt-10 text-2xl md:text-3xl font-normal px-10 md:px-10">
                At flowery.com, We believe in the power of flowers to brighter any occasion and bring joy to people's lives.
                Whether you're celebrating a special event or empty want to add a touch of beauty to your day.
                We are here to help you find the perfect floral arrangment.
                Discover the beauty of flowers with flower.com
              </p>
          
              
          
          </div>
          </section>


      </div>
    </>
  );
}

export default App;
