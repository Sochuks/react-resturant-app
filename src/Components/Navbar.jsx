import React, {useState} from 'react'
import { IoCart } from "react-icons/io5";


const Navbar = () => {
    const [isMenuVisible, toggleMenu] = useState(false)
  return (
    <>
    <nav className='relative py-2 px-2 w-full'>
        {/* container */}
        <div className='flex items-center justify-between max-w-7xl mx-auto'>
            {/* Column one */}
            <div className='flex items-center justify-between cursor-pointer'>
                {/* Logo */}
                <a className='flex items-center text-2xl py-2 px-2 font-bold' href="">
                <img src="https://cdn-icons-png.freepik.com/256/9720/9720408.png?ga=GA1.1.848979836.1710146980" alt="" className='h-14 ' />                    
                <span className='ml-2 text-secColor'>angry</span><span className='text-primaryColor'>Kitchen</span></a>
                
            </div>
            
            {/* Search Input */}
            <div className='hidden relative md:block'>
            <input type="text" placeholder="Search" 
            className="pl-12 py-3 w-[300px] md:w-[500px] bg-slate-200 rounded-full  text-gray-800 leading-tight focus:outline-none focus:ring-primaryColor focus:border-successColor focus:shadow-outline" />
            <div className="absolute right-0 inset-y-0 flex items-center">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                    </svg>
                </div>

                <div className="absolute left-0 inset-y-0 flex items-center ">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                    </svg>
                </div>
            </div>

            {/* Cart & Menu */}
            <div className='flex items-center space-x-2 px-4'>
                {/* Delivery Filter */}
                <div className='hidden md:flex items-center bg-gray-200 text-base p-1 rounded-full'>
                    <a className='bg-black text-white rounded-full p-2'>Delivery</a>
                    <a className='p-2'>Pickup</a>
                </div>
                {/* Cart */}
                <button className='hidden py-2 px-2 rounded-md bg-successColor text-white transition-colors ease-linear duration-300 hover:bg-successColor/60 hover:text-white md:block'>
                <IoCart size={30}/>
                </button>
                {/* Menu Icon */}
                <button className="btn btn-square btn-ghost bg-successColor text-white hover:bg-successColor/60 hover:text-white rounded-md"
                onClick={(e)=>toggleMenu(!isMenuVisible)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>
        </div>

        {/* Mobile Menu */}
            {/* overlay */}
            {isMenuVisible && <div className='bg-black/80 fixed w-full h-screen inset-0 z-10'></div>}
            {/* Side Drawer */}
            <div className={`fixed top-0 -left-[500px] w-[300px] md:w-[400px] h-screen bg-secColor 
            px-6 py-6 transition-all ease-in-out duration-500 z-10 ${isMenuVisible ? 'left-[0px]':''}`}>
                {/* drawer top */}
                <div className='flex items-center justify-between mt-2 mb-8'>
                    {/* Logo */}
                    <a>angryKiitchen</a>
                    {/* Close */}
                    <button className='btn btn-circle text-bgColor bg-slate-200 hover:bg-bgColor hover:text-white' 
                    onClick={()=>toggleMenu(!isMenuVisible)}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
                {/* Menu List */}
                <ul className='menuList cursor-pointer transition-colors ease-in-out duration-500 flex-col space-y-6 text-xl font-medium text-white'>
                    <li>Home</li>
                    <li>Order</li>
                    <li>About</li>
                    <li>Location</li>
                    <li>Contact</li>
                </ul>
        </div>


    </nav>
    </>
  )
}

export default Navbar