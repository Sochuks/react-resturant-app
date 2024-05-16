import React from 'react'
import {Categories} from '../Data/Data'

const Category = () => {
  return (
<section className='max-w-6xl px-4 py-12 mx-auto'>
    {/* container */}
    <ul className='grid grid-cols-2 md:grid-cols-4 gap-6 py-4'>
        
        {Categories.map((item)=>{
            return(
        <li key={item.id} className="rounded-2xl border border-gray-200 p-8">
            <div className="font-bold text-lg text-gray-900 flex justify-between items-center">
                <img src={item.images} className='h-20' alt="" />
                <h3>{item.name}</h3>
            </div>
          </li>
          )
        })}

    </ul>
</section>  )
}

export default Category