import React from 'react'
import logo from '../assets/WordWise.svg'

const Header = () => {
  return (
    <div>
       
        <header>
            <nav className="mx-auto flex max-w-6xl items-center justify-between pt-4 pb-2 px-6 lg:px-8 border-b border-1 border-slate-300" aria-label="Global">
                <img src={logo} />
                <button className='bg-slate-800 text-white py-1.5 px-5 rounded-full'>
                    <a target="_blank" href="https://github.com/codenay">Github</a>
                </button>
            </nav>
        </header>

        <div className='container mt-10 mx-auto flex justify-center w-3/5 '>
            <div>
               <p className='text-xs text-slate-500 p-2 px-4 border border-slate-500 rounded-full' >Powered by <span className='text-slate-800 font-semibold'><a target="_blank" href="https://openai.com/">Open AI</a> </span></p>
            </div>

        </div>

        <div className='container mt-5 mx-auto flex justify-center w-3/4'>
            <h1 className='text-3xl md:text-5xl text-center'>Unlock the Power of Words: <span className='text-gradient'> The Ultimate Keyword Extraction Tool for Your Text!</span> </h1>
        </div>

    </div>
  )
}

export default Header