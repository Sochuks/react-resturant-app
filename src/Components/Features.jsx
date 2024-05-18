import React from 'react'

const Features = () => {
  return (
    <section className='py-20 bg-gray-100 -mr-4'>
        {/* container */}
        <div className='mx-auto max-w-5xl flex gap-12 flex-wrap items-start justify-center p-8 md:p-2 md:justify-between'>
            {/* Feature Box 1 */}
            <div className="grid gap-4 justify-items-center bg-white rounded-md py-8 px-2 shadow-md text-center md:flex-1">
                <div className=" rounded-full border-2 border-bgColor bg-secColor/65 px-4 py-6">
                    <img className="h-16 w-16 mr-4" src="https://cdn-icons-png.freepik.com/256/10635/10635924.png?ga=GA1.1.848979836.1710146980&semt=ais_hybrid" alt="" />
                </div>
                <h3 className="text-2xl font-semibold text-primaryColor">Easy To Order</h3>
                <p>Our products are secure and private out-of-the-box</p>
            </div>
            
                {/* Feature Box 2 */}
            <div className="grid gap-4 justify-items-center bg-white rounded-md py-8 px-2 shadow-md text-center md:flex-1">
                <div className=" rounded-full border-2 border-bgColor bg-secColor/65 px-6 py-6 ">
                    <img className="h-16 w-16" src="https://cdn-icons-png.freepik.com/256/5457/5457470.png?ga=GA1.1.848979836.1710146980&semt=ais_hybrid" alt="" />
                </div>
                <h3 className="text-2xl font-semibold text-primaryColor">Quick Dispatch</h3>
                <p>Our products are secure and private out-of-the-box</p>
            </div>

            {/* Feature Box 3 */}
            <div className="grid gap-4 justify-items-center bg-white rounded-md py-8 px-2 shadow-md text-center md:flex-1">
                <div className=" rounded-full border-2 border-bgColor bg-secColor/65 px-6 py-6 ">
                    <img className="h-16 w-16" src="https://cdn-icons-png.freepik.com/256/10636/10636034.png?ga=GA1.1.848979836.1710146980" alt="" />
                </div>
                <h3 className="text-2xl font-semibold text-primaryColor">Quality Assurance</h3>
                <p>Our products are secure and private out-of-the-box</p>
            </div>

        </div>

    </section>
  )
}

export default Features