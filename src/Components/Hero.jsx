import React from 'react'
import heroImage from '../assets/img/hero-image.svg' 

const Hero = () => {
  return (
    <section className='relative w-full px-6 pb-14 md:pb-2 -mr-2 md:mr-0 mx-auto bg-hero-one bg-no-repeat bg-cover overflow-hidden'>
        {/* overlay
        <div className='absolute bg-black opacity-40 w-full h-screen'></div> */}
        {/* container */}
        <div className='md:grid md:grid-cols-10 flex flex-col-reverse items-center justify-center mx-auto px-2'>
            {/* Column One */}
            <div className='ml-0 text-center md:text-left md:col-span-5 md:ml-32'>
            <h1 className="mb-5 text-4xl md:text-6xl font-bold text-primaryColor leading-0 ">Hungry!?<br/>
                <span className='bg-gradient-to-br from-secColor via-bgColor to-secColor 
                bg-clip-text text-transparent'> Check menu, place order</span><br /> it's that easy
            </h1>
            <p className="mt-2 mb-5 md:mr-28">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className='bg-gradient-to-r from-green-400 to-green-700 px-12 py-4 
                rounded-md font-medium text-whiteColor text-base' href="#">
                    Order Food </button>
            </div>

            {/* Column Two */}
            <div className='md:col-span-5 relative md:-ml-36'>
                {/* container */}
                <div className='flex items-center md:translate-x-72'>
                    {/* circle one */}
                    <div className='hidden outline-2 outline bg-successColor opacity-85 outline-bgColor 
                    border-2 border-green-600 outline-offset-8 xl:block
                    rounded-[100%] md:h-[300px] my-10 md:py-2 md:w-[300px] z-10 md:-mr-28 '>
                        <img src="./src/assets/img/banner-image-three.png" alt="" className='' />
                    </div>

                    {/* Circle two */}
                    <div className='outline outline-2 outline-successColor shadow-md shadow-darkColor/60 
                    border-8 md:border-[30px] border-secColor/75 bg-hero-two outline-offset-[20px] rounded-[100%]
                    md:block h-48 w-48 md:h-[700px] md:w-[700px] mt-10 mb-10 md:-mt-10 md:-mb-10 bg-no-repeat bg-cover bg-center overflow-hidden'>
                    <img src=""
                    className='' alt="" />
                    </div>
                </div>
                
            </div>

        </div>
        
    </section>
  )
}

export default Hero