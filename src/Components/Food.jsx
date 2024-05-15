import React, {useState} from 'react'
import { Category } from '../Data/Data'

const Food = () => {
    const[filterFoods, setfilterFoods] = useState(Category)

    // Filter by food type
    const filterType = (category) =>{
        setfilterFoods(
            Category.filter((item)=>{
                return item.category === category;
            }) 
        )
    }

    // Filter by food Price
    const filterPrice = (price) =>{
        setfilterFoods(
            Category.filter((item)=>{
                return item.price === price;
            }) 
        )
    }
  return (
    <section className='max-w-5xl px-4 py-12 mx-auto'>
        <h2 className='text-center font-bold text-3xl text-secColor'>Top Rated Menu Items</h2>
        {/* Filter Row */}
        <div className='flex flex-col justify-between md:flex-row '>
            {/* Filter type */}
            <div>
                <p className='text-silver-700 font-semibold'>Filter Type</p>
                <div className='buttonList flex justify-between gap-2'>
                    <button>All</button>
                    <button>Burgers</button>
                    <button>Pizza</button>
                    <button>Salads</button>
                    <button>Chicken</button>
                </div>
            </div>

            {/* Filter Price*/}
            <div>
                <p className='text-ash-700 font-semibold'>Filter Price</p>
                <div className='buttonList flex justify-between gap-2'>
                    <button>All</button>
                    <button>Burgers</button>
                    <button>Pizza</button>
                    <button>Salads</button>
                    <button>Chicken</button>
                </div>
            </div>
                
        </div>
        {/* food Categories*/}
        <div className='py-10'>
            <div  className='grid md:grid-cols-3 grid-cols-2 gap-4'>
                {/* Map Food */}
                {Category.map((list) =>{
                    return(
                        <div key={list.id} className="card w-80 bg-base-100 rounded-md">
                            <figure><img src="https://placehold.co/300x300" alt="" /></figure>
                            <div className="card-body bg-blue-300">
                            <h2 className="card-title">{list.name}</h2>
                            <p>{list.description}</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                        </div> 
                        )

                   })};

                </div>
                        
            </div>
    </section>
  )
}

export default Food