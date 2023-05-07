import React from 'react'
import twitterIcon from '../assets/twitter.svg'
import instagramIcon from '../assets/instagram.svg'
import githubIcon from '../assets/github.svg'


const Footer = () => {
  return (
    <div>
        <footer>
            <div className='ft fixed bottom-0 w-full mt-20'>
                <div className="mx-auto  flex max-w-6xl items-center justify-between pt-2 pb-2 px-6 lg:px-8 border-t border-1 border-slate-300" aria-label="Global">
                    <div>
                        <p className='text-slate-400 font-light text-sm'>Designed and built by <span className='text-slate-800 font-normal' ><a target="_blank" href="https://github.com/codenay">KoFi</a></span> </p>
                    </div>
                    <div className='w-28 hidden md:flex  justify-between'>
                        <a href="https://twitter.com/kofi_ui"><img src={twitterIcon}  className='p-2 rounded-md hover:bg-slate-200 duration-150 ease-in-out'/></a>
                        <a href="https://www.instagram.com/kofi.ui/"><img src={instagramIcon} className='p-2 rounded-md hover:bg-slate-200 duration-150 ease-in-out'/></a>
                        <a href="https://github.com/codenay"><img src={githubIcon} className='p-2 rounded-md hover:bg-slate-200 duration-150 ease-in-out'/></a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer