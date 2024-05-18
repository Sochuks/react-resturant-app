import React, {useState} from 'react'
import Logo from '../assets/img/logo.png'

const Navbar = () => {
    const [isMenuVisible, toggleMenu] = useState(false)
  return (
    <>
    <nav className='relative py-2 px-2 max-w-7xl mx-auto'>
        {/* container */}
        <div className='flex items-center justify-between px-2'>
            {/* Column one */}
            <div className='flex items-center justify-between cursor-pointer'>
                {/* Logo */}
                <a className='flex items-center text-2xl py-2 px-2' href="">
                <img src={Logo} alt="" className='h-12 ' />                    
                angryKiitchen</a>
                {/* Delivery Filter */}
                <div className='hidden md:flex items-center bg-gray-200 text-base p-1 rounded-full'>
                    <a className='bg-black text-white rounded-full p-2'>Delivery</a>
                    <a className='p-2'>Pickup</a>
                </div>
            </div>
            
            {/* Search Input */}
            <div className='hidden relative md:flex items-center justify-between'>
                <p className='absolute inset-3 mr-2 text-slate-500'>O</p>
            <input type="text" placeholder="Search" 
            className="pl-8 py-3 w-[300px] md:w-[500px] bg-slate-200 rounded-full" />
            </div>

            {/* Cart & Menu */}
            <div className='flex items-center space-x-2'>
                {/* Cart */}
                <button className='hidden md:block'>
                    Cart
                </button>
                {/* Menu Icon */}
                <button className=""
                onClick={(e)=>toggleMenu(!isMenuVisible)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                </button>
            </div>
        </div>

        {/* Mobile Menu */}
            {/* overlay */}
            {isMenuVisible && <div className='bg-black/80 fixed w-full h-screen inset-0 z-10'></div>}
            {/* Side Drawer */}
            <div className={`fixed top-0 -left-[500px] w-[300px] md:w-[400px] h-screen bg-slate-200 
            px-6 py-6 transition-all ease-in-out duration-500 z-10 ${isMenuVisible ? 'left-[0px]':''}`}>
                {/* drawer top */}
                <div className='flex justify-between mt-2 mb-8'>
                    {/* Logo */}
                    <a>angryKiitchen</a>
                    {/* Close */}
                    <a className='cursor-pointer' 
                    onClick={()=>toggleMenu(!isMenuVisible)}>Close</a>
                </div>
                {/* Menu List */}
                <ul>
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