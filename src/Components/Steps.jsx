import React from 'react'

const Steps = () => {
  return (
    <section>
        {/* container */}
        <div className='max-w-6xl mx-auto'>
            {/* Heading */}
            <div className="text-center">
                <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
                    STEPS
                </p>
                <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
                    How it <span className="text-indigo-600">Works?</span>
                </h3>

            </div>
            {/* Steps container */}
            <div className='mt-20'>

            <ul className="md:grid md:grid-cols-3 md:col-gap-10 md:row-gap-10">

                    <li className=" bg-gray-100 p-5 pb-10 text-center">
                        <div className="flex flex-col items-center">
                            <div className="flex-shrink-0 relative top-0 -mt-16">
                                <div
                                    className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                                    1
                                </div>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-lg leading-6 font-semibold text-gray-900">Headline</h4>
                                <p className="mt-2 text-base leading-6 text-gray-500">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className=" bg-gray-100 p-5 pb-10 text-center">
                        <div className="flex flex-col items-center">
                            <div className="flex-shrink-0 relative top-0 -mt-16">
                                <div
                                    className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                                    2
                                </div>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-lg leading-6 font-semibold text-gray-900">Headline</h4>
                                <p className="mt-2 text-base leading-6 text-gray-500">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li className=" bg-gray-100 p-5 pb-10 text-center">
                        <div className="flex flex-col items-center">
                            <div className="flex-shrink-0 relative top-0 -mt-16">
                                <div
                                    className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                                    3
                                </div>
                            </div>
                            <div className="mt-4">
                                <h4 className="text-lg leading-6 font-semibold text-gray-900">Headline</h4>
                                <p className="mt-2 text-base leading-6 text-gray-500">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </p>
                            </div>
                        </div>
                    </li>

                    </ul>

            </div>
            
        </div>
    </section>
  )
}

export default Steps