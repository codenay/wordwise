import React from 'react'
import { useState } from 'react'

const Textinput = ({extractKeywords}) => {
    const [text, setText] = useState('');
    
    const submitText = () => {
        if(!text) return
        extractKeywords(text)
    }

  return (
    <div>
       <div class="mx-auto mt-10 w-11/12 md:w-4/12 sm:mt-10">
            <div class="sm:col-span-2">
                <label for="message" class="block text-sm leading-6 text-gray-900 font-normal">Type/paste text:</label>
                <div class="mt-2">
                <textarea value={text} onChange={(e) => setText (e.target.value)} rows="6" class="block resize-none w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1   sm:text-sm sm:leading-6"></textarea>
                </div>
            </div>
            <div class="mt-6">
                <button onClick={submitText} class="block w-full rounded-md bg-slate-950 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-slate-800 duration-150 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ">Extract Keywords</button>
             </div>
       </div>
    </div>
  )
}

export default Textinput