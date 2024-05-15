import React from 'react'

const Food = () => {
  return (
    <section className='max-w-5xl px-4 py-12 mx-auto'>
        <h2 className='text-center font-bold text-3xl text-secColor'>Top Rated Menu Items</h2>
        {/* Filter Row */}
        <div className='flex flex-col justify-between md:flex-row '>
            {/* Filter type */}
            <div>
                <p className='text-slate-700 font-semibold'>Filter Type</p>
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
                <p>Filter Type</p>
                <div>
                    <button>All</button>
                    <button>Burgers</button>
                    <button>Pizza</button>
                    <button>Salads</button>
                    <button>Chicken</button>
                </div>
            </div>
                
            
        </div>
    </section>
  )
}

export default Food