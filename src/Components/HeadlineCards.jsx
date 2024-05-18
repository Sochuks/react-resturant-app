import React, { useEffect, useState } from 'react'
import{Resturant} from '../Data/Data'
import Rating from './Rating'

const HeadlineCards = () => {
    const [topResturant, setTopResturant] = useState(Resturant)

    // Filter Resturants
    const filterData = () =>{
        let data = [...Resturant];
        data = data.filter((item) => item.tags.toLowerCase() == 'top')
        setTopResturant(data)
    }

    // UseEffect
    useEffect(()=> filterData, [Resturant])

  return (
    <section className='py-16 px-2'>
        {/* Container */}
        <div className='flex flex-col md:flex-row max-w-6xl mx-auto gap-10 overflow-hidden'>
            {/* Card One */}
            { topResturant.map((item)=>( 
                
                <article key={item.id} className='flex flex-wrap md:flex-nowrap cursor-pointer transform duration-500 hover:-translate-y-1'>
                    <img className="w-full max-h-[400px] object-cover md:w-52" src="https://i.ibb.co/Kr4b0zJ/152013403-10158311889099633-8423107287930246533-o.jpg" alt="" />
                    
                    <div>
                        {/* top half */}
                        <div className="p-5 pb-10">
                            <h1 className="text-2xl font-semibold text-gray-800 mt-4">
                                {item.name}
                            </h1>
                            <p className="text-xl text-gray-400 mt-2 leading-relaxed">
                                Located in {item.location} Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </p>
                        </div>

                        {/* Bottom half */}
                        <div className='p-5 bg-secColor'>
                            {/* container */}
                            <div className='sm:flex sm:justify-between'>
                                {/* Location & rating */}
                                <div>
                                    <div className="text-lg text-gray-700">
                                        <span className="text-gray-900 font-bold">196 km</span> from Dhaka
                                    </div>
                                    {/* Ratings */}
                                    <div className='flex items-center justify-between'>
                                        {/* stars */}
                                        <div className='flex items-center'>
                                            <Rating rating={item.rating} maxRating={5}/>
                                        </div>
                                        {/* total votes */}
                                        <div className="text-gray-600 ml-2 text-sm md:text-base mt-1">
                                            16 reviews
                                        </div>
                                    </div>
                                </div>
                                {/* Button */}
                                <button className="mt-3 sm:mt-0 py-2 px-5 md:py-3 md:px-6 bg-purple-700 hover:bg-purple-600 font-bold text-white md:text-lg rounded-lg shadow-md">
                                    Menu
                                </button>
                            </div>
                                {/* BOTTOM TEXT */}
                                <div className="mt-3 text-gray-600 text-sm md:text-sm">
                                    *Places to visit: Mahasthangarh, Vasu Bihar &amp; Momo Inn
                                </div>
                        </div>
                        
                    </div>
                    
                </article>
            
            ))};
            
        </div>

    </section>
  )
}

export default HeadlineCards