import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex justify-center bg-black mt-20'>
        <footer className='bg-black flex justify-center w-full max-w-[1184px] h-[72px] items-center'>
            <div>
                <h1 className='text-base font-light text-mb-gray '>
                &copy; 2022 <span className='text-transparent font-bold bg-clip-text text-bg-gradient'>moviebox</span> All Rights Reserved
                </h1>
            </div>
                
        </footer>
    </div>
  )
}

export default Footer