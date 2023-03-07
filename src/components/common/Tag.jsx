import React from 'react'

const Tag = ({tagName}) => {
  return (
    <div className='bg-mb-liberty-100 text-mb-liberty-700 w-fit px-4 py-2 rounded-full font-medium text-[10px] uppercase md:py-1 md:px-2 md:text-[8px]'>
        {tagName}
    </div>
  )
}

export default Tag