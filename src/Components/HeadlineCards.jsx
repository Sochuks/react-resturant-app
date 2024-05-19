import React, {useState, useEffect} from 'react';
import {Buka} from '../Data/Data';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from './Rating';

const HeadlineCards = () => {
    // UseState
    const[topBuka, setTopbuka] = useState(Buka);

        // Filter Resturants
        const filterData = () =>{
            let data = [...Buka];
            data = data.filter((item) => item.tags.toLowerCase() === 'top')
            setTopbuka(data)
        }
    // UseEffect
    useEffect(()=> filterData(), []);



    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll:1,
      };
  return (
    <section className='max-w-6xl mx-auto'>

        <Slider {...settings}>
        {topBuka.map((item, index) =>{
            return(
                <div key={index} className='md:my-20 overflow-hidden'>
                    
                    <div className='flex flex-wrap md:flex-nowrap shadow-lg group cursor-pointer transform duration-500 hover:-translate-y-1'>
                            
                            {/* image */}
                            <img className="w-full max-h-[400px] object-cover md:w-52" src="https://i.ibb.co/Kr4b0zJ/152013403-10158311889099633-8423107287930246533-o.jpg" alt="" />

                            {/* Info Box */}
                            <div className='flex flex-col'>
                                {/* Top */}
                                <div className='p-5 pb-10'>
                                    <h1 className="text-2xl font-semibold text-gray-800 mt-4">
                                        {item.name}
                                    </h1>
                                    <p className="text-xl text-gray-400 mt-2 leading-relaxed">
                                        Located in {item.location} Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    </p>
                                </div>

                                {/* Bottom */}
                                <div className='p-5 bg-secColor'>
                                    {/* container */}
                                    <div className='sm:flex sm:justify-between'>
                                        {/* Location & Ratings */}
                                        <div className='flex flex-col'>
                                            <div className="text-lg text-gray-700">
                                                <span className="text-gray-900 font-bold">196 km</span> from Dhaka
                                            </div>

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
                                        <button className="mt-3 sm:mt-0 py-2 px-4 md:py-3 md:px-5 bg-successColor hover:bg-successColor/75 font-medium text-white md:text-lg rounded-lg shadow-md">
                                            Menu
                                        </button>

                                    </div>
                                    {/*Bottom Text */}
                                    <div className="mt-4 text-white text-sm md:text-sm">
                                        *Places to visit: Mahasthangarh, Vasu Bihar &amp; Momo Inn
                                    </div>

                                </div> 

                            </div>

                        

                    </div>
                </div>
            )
            
        })}
</Slider>
    </section>
  )
}

export default HeadlineCards