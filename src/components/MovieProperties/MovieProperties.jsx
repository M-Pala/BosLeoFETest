import React from 'react'
import { SectionTitle, Tag, TrendingTag } from '../common'

const MovieProperties = () => {
  return (
    <section className='w-full flex justify-center flex-wrap md:px-2'>
        <div className='w-full max-w-[1184px] mt-8'>
            <div className='flex w-full justify-between md:flex-wrap md:gap-y-5'>
                
                <SectionTitle title='Movie Properties' subtitle='A list of the details for this movie' />
                <TrendingTag/>
            </div>
            <div className='w-full mt-8 border border-mb-highlight-500 rounded-lg md:overflow-x-scroll'>
                <table className="table-auto w-full">
                    <thead className='border-b border-b-mb-highlight-500 text-mb-black font-medium text-sm'>
                        <tr>
                            <th scope='col' className='bg-mb-highlight-100 rounded-tl-lg p-4 text-start md:pl-4'>Category</th>
                            <th scope='col' className='bg-mb-highlight-100  text-start md:pl-2'>Streams</th>
                            <th scope='col' className='bg-mb-highlight-100  text-start md:pl-2'>Watchlists</th>
                            <th scope='col' className='bg-mb-highlight-100  text-start md:pl-2'>Owner</th>
                            <th scope='col' className='bg-mb-highlight-100 rounded-tr-lg text-start md:pl-2'>Release Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='h-full text-mb-black font-normal text-sm'>
                            <td className='flex py-6 px-4 gap-x-2 items-center md:flex-wrap md:gap-y-1'>
                                <Tag tagName={'Action'}/>
                                <Tag tagName={'thriller'}/>
                            </td>
                            <td className='py-7 md:pl-2'>24,512,232</td>
                            <td className='py-7 md:pl-2'>389,234</td>
                            <td className='py-7 md:pl-2'>Sony Entertainment</td>
                            <td className='py-7 md:pl-2 whitespace-nowrap'>21th May, 2022</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
  )
}

export default MovieProperties