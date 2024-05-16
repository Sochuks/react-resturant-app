import React, {useState} from 'react'
import { Menu } from '../Data/Data'
import { TbTruckDelivery } from "react-icons/tb";


const Food = () => {
    const[filterFoods, setfilterFoods] = useState(Menu)

    // Filter by food type
    const filterType = (category) =>{
        setfilterFoods(
            Menu.filter((item)=>{
                return item.category === category;
            }) 
        )
    }

    // Filter by food Price
    const filterPrice = (price) =>{
        setfilterFoods(
            Menu.filter((item)=>{
                return item.price <= price;
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
                    <button onClick={()=>setfilterFoods(Menu)}>All</button>
                    <button onClick={()=>filterType("Spicy")}>Spicy</button>
                    <button onClick={()=>filterType("Chicken")}>Chicken</button>
                    <button onClick={()=>filterType("Beef")}>Beef</button>
                    <button onClick={()=>filterType("Fish")}>Fish</button>
                </div>
            </div>

            {/* Filter Price*/}
            <div>
                <p className='text-ash-700 font-semibold'>Filter Price</p>
                <div className='buttonList flex justify-between gap-2'>
                    <button onClick={()=>setfilterFoods(Menu)}>All</button>
                    <button onClick={()=>filterPrice(250)}>$250</button>
                    <button onClick={()=>filterPrice(350)}>$350</button>
                    <button onClick={()=>filterPrice(450)}>$450</button>
                    <button onClick={()=>filterPrice(500)}>$500</button>
                </div>
            </div>
                
        </div>
        {/* food Categories*/}
        <div className='py-10'>
            <div  className='grid md:grid-cols-3 grid-cols-2 gap-8'>
                {/* Map Food */}
                {filterFoods.map((list) =>{
                    return(
                        <div key={list.id} className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
                            <div className="relative">
                            <img src={list.image} className='max-h-[350px]' alt="" />
                                <div className="absolute flex items-center justify-between top-0 right-0 bg-green-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                                    <p>15mins</p>
                                    <TbTruckDelivery size={25} />
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-lg font-medium mb-2">{list.name}</h3>
                                <p className="text-gray-600 text-sm mb-4">{list.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-lg">${list.price}</span>
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                Buy Now
                            </button>
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