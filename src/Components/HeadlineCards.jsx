import React from 'react'

const HeadlineCards = () => {
  return (
    <section className='mx-w-5xl mx-auto py-10 px-4'>
        {/* Container */}
        <div className=''>
            {/* Card One */}
            <div className='relative rounded-xl w-[350px] h-[250px] bg-BreakFast bg-cover bg-no-repeat shadow-xl shadow-slate-950/15'>
                {/* overlay */}
                <div className='absolute inset-0 w-full h-full px-4 py-6 text-white bg-black/50 rounded-xl'>
                    <p className='text-2xl font-semibold uppercase'>OVO resturant</p>
                    <div className='flex items-center justify-between w-full absolute bottom-4 left-0 px-4'>
                        <p>15MIN </p>
                        <button>View Menu</button>
                    </div>
                    
                </div>
                
            </div>
        </div>

    </section>
  )
}

export default HeadlineCards