import React from 'react'
import twitterIcon from '../assets/twitter.svg'
import instagramIcon from '../assets/instagram.svg'
import githubIcon from '../assets/github.svg'


const Footer = () => {
  return (
    <div>
        <footer>
            <div className="ft mx-auto mt-96 flex max-w-6xl items-center justify-between pt-4 pb-2 px-6 lg:px-8 border-t border-1 border-slate-300" aria-label="Global">
                <div>
                    <p className='text-slate-400 font-light'>Designed and built by <span className='text-slate-800 font-normal' ><a target="_blank" href="https://github.com/codenay">KoFi</a></span> </p>
                </div>
                <div className='w-28 hidden md:flex  justify-between'>
                    <img src={twitterIcon} />
                    <img src={instagramIcon} />
                    <img src={githubIcon} />
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer