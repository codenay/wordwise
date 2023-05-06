import React from 'react'
import { useState } from 'react'

const Output = ( {keywords, loading}) => {
    

  return (
    <div>
        <div class="mx-auto mt-10  w-11/12 md:w-4/12 sm:mt-10">
            {loading ? (console.log('loading')) : (
                // <h3 className=' text-sm leading-6 text-gray-900 font-normal'>Keywords:</h3>
                <p className='w-full mt-2 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 sm:text-sm sm:leading-6 outline-none read-only'>
                    {keywords}
                </p>
            )}
            
        </div>
    </div>
  )
}

export default Output