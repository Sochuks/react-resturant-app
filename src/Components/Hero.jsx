import React from 'react'
import heroImage from '../assets/img/hero-image.svg' 

const Hero = () => {
  return (
    <section className='relative w-full py-24 px-6 mx-auto bg-hero-one bg-no-repeat bg-cover'>
        {/* overlay
        <div className='absolute bg-black opacity-40 w-full h-screen'></div> */}
        {/* container */}
        <div className='flex items-center justify-between max-w-6xl mx-auto px-2 py-4'>
            {/* Column One */}
            <div className='md:w-1/2'>
            <h1 className="mb-5 text-6xl font-bold text-slate-800 leading-0">Grow your business
                <span className='bg-gradient-to-br from-[#9a75dc] via-secColor to-[#9a75dc] 
                bg-clip-text text-transparent'> we will handle</span> all your logistics
            </h1>
            <p className="mt-2 mb-5 md:mr-36">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className='bg-gradient-to-r from-green-400 to-green-700 px-12 py-4 
                rounded-md font-medium text-whiteColor text-base' href="#">
                    Track Package</button>
            </div>

            {/* Column Two */}
            <div className='md:w-1/2'>
                <img src={heroImage} alt="" />
            </div>

        </div>
        
    </section>
  )
}

export default Hero