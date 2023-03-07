import React, { useState } from 'react'
import { Bell, Settings } from './icons'
import Avatar from '../images/Avatar.png'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='bg-black w-full flex justify-center'>
        <nav className='bg-black text-white flex justify-between w-full max-w-[1184px] h-[72px] items-center md:hidden'>
            <div className='flex justify-between gap-x-8'>
                <div>
                    <h1 className='text-transparent text-2xl font-bold bg-clip-text text-bg-gradient'>
                    {/* background: linear-gradient(273.64deg, #35C3F3 11.27%, #8B9FE8 36.72%, #E681D8 61.72%, #FFA9A4 82.79%, #FED2CE 107.29%, #FED2CE 107.29%); */}

                        moviebox
                    </h1>
                </div>
                <ul className='flex justify-between items-center font-medium text-base text-mb-gray gap-x-4'>
                    <li className='hover:text-mb-white cursor-pointer'>Overview</li>
                    <li className='text-mb-white hover:text-mb-white cursor-pointer'>Movies</li>
                    <li className='hover:text-mb-white cursor-pointer'>Reporting</li>
                    <li className='hover:text-mb-white cursor-pointer'>Users</li> 
                </ul>
            </div>
            <div className='flex gap-x-2 items-center'>
                <div>
                    <Settings/>
                </div>
                <div>
                    <Bell/>
                </div>
                <div>
                    <img src={Avatar} alt="" />
                </div>
            </div>
        </nav>
        
        <nav className='hidden fixed bg-black text-white justify-between w-full max-w-[1184px] h-[64px] px-2 items-center z-20 md:flex'>
            <div className='flex justify-between gap-x-8'>
                <div>
                    <h1 className='text-transparent text-2xl font-bold bg-clip-text text-bg-gradient'>
                    {/* background: linear-gradient(273.64deg, #35C3F3 11.27%, #8B9FE8 36.72%, #E681D8 61.72%, #FFA9A4 82.79%, #FED2CE 107.29%, #FED2CE 107.29%); */}

                        moviebox
                    </h1>
                </div>
                
            </div>
            <div className='flex gap-x-2 items-center'>
                <button onClick={()=>setMenuOpen(!menuOpen)}>
                    <svg width="35" height="23" viewBox="0 0 35 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="2.5" x2="25" y2="2.5" stroke="#F5F5F5" stroke-width="2"/>
                        <line y1="11.5" x2="25" y2="11.5" stroke="#F5F5F5" stroke-width="2"/>
                        <line y1="20.5" x2="25" y2="20.5" stroke="#F5F5F5" stroke-width="2"/>
                    </svg>  
                </button>
            </div>

            {
                menuOpen &&
                <div className='flex flex-col fixed z-10 bg-black h-full top-0  left-0 w-full'>
                    <div className='flex justify-between w-full max-w-[1184px] h-[70px] items-center px-2'>
                        <div className='flex justify-between gap-x-8 z-20'>
                            <div>
                                <h1 className='text-transparent text-2xl font-bold bg-clip-text text-bg-gradient'>
                                {/* background: linear-gradient(273.64deg, #35C3F3 11.27%, #8B9FE8 36.72%, #E681D8 61.72%, #FFA9A4 82.79%, #FED2CE 107.29%, #FED2CE 107.29%); */}

                                    moviebox
                                </h1>
                            </div>
                        </div>
                        <div className='flex gap-x-2 items-center z-20'>
                            <button onClick={()=>setMenuOpen(!menuOpen)}>
                                <svg width="35" height="23" viewBox="0 0 35 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="2.5" x2="25" y2="2.5" stroke="#F5F5F5" stroke-width="2"/>
                                    <line y1="11.5" x2="25" y2="11.5" stroke="#F5F5F5" stroke-width="2"/>
                                    <line y1="20.5" x2="25" y2="20.5" stroke="#F5F5F5" stroke-width="2"/>
                                </svg>  
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-col justify-between h-full'>
                        <ul className='flex flex-col divide-y-[1px] divide-mb-gray border-b border-b-mb-gray font-medium text-base text-mb-gray'>
                            <li className='hover:text-mb-white cursor-pointer w-full px-2 py-2'>Overview</li>
                            <li className='text-mb-white hover:text-mb-white cursor-pointer w-full px-2 py-2'>Movies</li>
                            <li className='hover:text-mb-white cursor-pointer w-full px-2 py-2'>Reporting</li>
                            <li className='hover:text-mb-white cursor-pointer w-full px-2 py-2'>Users</li> 
                        </ul>

                        <div className='flex flex-col w-full gap-x-2 divide-y-[1px] divide-mb-gray'>
                            <div className='flex items-center gap-x-4 px-2 py-2'>
                                <img src={Avatar} alt="" /> Profile
                            </div>
                            <div className='flex items-center gap-x-4 px-2 py-2'>
                                <Bell/> Notifications
                            </div>
                            <div className='flex items-center gap-x-4 px-2 py-2'>
                                <Settings/> Settings
                            </div>
                        </div>
                    </div>
                </div>
            }
        </nav>
    </div>
  ) 
}

export default Navbar