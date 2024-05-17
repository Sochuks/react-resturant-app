import React from 'react'
import heroImage from '../assets/img/hero-image.svg' 

const Hero = () => {
  return (
    <section className='relative w-full px-6 mx-auto bg-hero-one bg-no-repeat bg-cover overflow-hidden'>
        {/* overlay
        <div className='absolute bg-black opacity-40 w-full h-screen'></div> */}
        {/* container */}
        <div className='md:grid md:grid-cols-10 flex-col items-center justify-center max-full mx-auto px-2'>
            {/* Column One */}
            <div className='col-span-5 ml-32'>
            <h1 className="mb-5 text-6xl font-bold text-primaryColor leading-0 ">Hungry!?<br/>
                <span className='bg-gradient-to-br from-secColor via-bgColor to-secColor 
                bg-clip-text text-transparent'> Check menu, place order</span> it's that easy
            </h1>
            <p className="mt-2 mb-5 md:mr-28">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className='bg-gradient-to-r from-green-400 to-green-700 px-12 py-4 
                rounded-md font-medium text-whiteColor text-base' href="#">
                    Order Food </button>
            </div>

            {/* Column Two */}
            <div className='col-span-5 relative md:-ml-36'>
                {/* container */}
                <div className='flex items-center translate-x-72'>
                    {/* circle one */}
                    <div className='outline-4 outline bg-successColor opacity-85 outline-bgColor 
                    border-2 border-green-600 outline-offset-8 
                    rounded-[100%] h-[300px] w-[300px] z-10 -mr-28 '>
                        <img src="./src/assets/img/banner-image-three.png" alt="" className='' />
                    </div>

                    {/* Circle two */}
                    <div className='outline outline-4 outline-successColor 
                    border-[30px] border-secColor bg-hero-two outline-offset-[20px] rounded-[100%]
                    h-[700px] w-[700px] -mt-10 -mb-10 bg-no-repeat bg-cover bg-center overflow-hidden'>
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