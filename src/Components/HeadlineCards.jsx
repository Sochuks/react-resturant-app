import React, { useEffect, useState } from 'react'
import{Resturant} from '../Data/Data'

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
    <section className='py-16 px-4'>
        {/* Container */}
        <div className='flex items-center justify-between max-w-6xl mx-auto gap-6'>
            {/* Card One */}
            { topResturant.map((item)=>( 
                <div key={item.id} className='relative shadow-xl rounded-xl shadow-slate-950/15'>
                    {/* overlay */}
                    <div className='absolute inset-0 w-full h-full px-4 py-6 text-white bg-black/50 rounded-xl'>
                        <p className='text-2xl font-semibold uppercase'>{item.name}</p>
                        <div className='flex items-center justify-between w-full absolute bottom-4 left-0 px-4'>
                            <p>{item.location}</p>
                            <button>View Menu</button>
                        </div>                    
                    </div>
                    {/* image */}
                        <img src={item.image} className='w-full max-h-[250px] object-cover rounded-xl' alt="Breakfast"  />
            </div> 
            
            ))};
            
        </div>

    </section>
  )
}

export default HeadlineCards