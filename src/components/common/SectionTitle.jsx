import React from 'react'

const SectionTitle = ({title, subtitle}) => {
  return (
    <div className='md:w-full'>
        <h3 className='font-medium text-base text-mb-black'>{title}</h3>
        <p className='font-normal text-sm text-mb-gray'>{subtitle}</p>
    </div>
  )
}

export default SectionTitle