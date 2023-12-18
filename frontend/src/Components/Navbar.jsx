import React from 'react';

import { FaRegHeart, FaRegUserCircle, FaShoppingCart } from "react-icons/fa";

 import logo from "../Assets/FLOWERY.COM.png";

const Navbar = () => {
  return (
    <>
    <div className=' flex justify-between items-center bg-gradient-to-r from-purple-500 to-pink-500 py-3 px-4 md:w-full '>
        <div className=' flex flex-row items-center gap-2'>

        <img src={logo} alt="my logo" className='rounded-full h-10 w-10' /> 
        <h1 className=' text-1xl font-extrabold pl-2'>FLOWERY.COM</h1>
        </div>
        <ul className='   justify-between items-center gap-5 text-1xl font-bold uppercase hidden  md:flex'>
            <li className= "  cursor-pointer hover:border-b after:border-gray-300 hover:text-gray-300">Home</li> 
            <li className= " cursor-pointer hover:border-b after:border-gray-300 hover:text-gray-300">About</li>
            <li className= " cursor-pointer hover:border-b after:border-gray-300 hover:text-gray-300">Products</li>
            <li className= " cursor-pointer hover:border-b after:border-gray-300 hover:text-gray-300">Reviews</li>
            <li className= "cursor-pointer hover:border-b after:border-gray-300 hover:text-gray-300">Contacts</li>
        </ul>
        <div className=' flex justify-between items-center text-2xl gap-2 mx-4 px-2'>
            <FaRegUserCircle size={30} className=' hover:border-b-2 border-black '/>
            <FaRegHeart size={30} className=' hover:border-b-2 border-black ' />
            <FaShoppingCart size={30} className=' hover:border-b-2 border-black '/>
        </div>


    </div>
    </>
  )
}

export default Navbar