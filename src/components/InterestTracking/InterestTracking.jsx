import React from 'react'
import { SectionTitle } from '../common'

const InterestTracking = () => {
  return (
    <section className='w-full flex justify-center flex-wrap md:px-2'>
        <div className='w-full max-w-[1184px] mt-8'>
            <div className='flex w-full justify-between'>
                <SectionTitle title='Average watch time' subtitle='This tracks the average watch by users every month'/>
            </div>
            <div className='w-full mt-8 border border-mb-highlight-500 rounded-lg md:overflow-x-scroll'>
                <table className="table-auto w-full">
                    <thead className='border-b border-b-mb-highlight-500 text-mb-black font-medium text-sm'>
                        <tr>
                            <th scope='col' className='bg-mb-highlight-100 rounded-tl-lg p-4 text-start md:pl-4'>People Reached</th>
                            <th scope='col' className='bg-mb-highlight-100  text-start md:pl-2'>Content Interactions</th>
                            <th scope='col' className='bg-mb-highlight-100  text-start md:pl-2'>Impressions</th>
                            <th scope='col' className='bg-mb-highlight-100  text-start md:pl-2'>Shares</th>
                            <th scope='col' className='bg-mb-highlight-100 rounded-tr-lg text-start md:pl-2'>Likes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='h-full text-mb-black font-normal text-sm'>
                            <td className='flex py-7 px-4 gap-x-2 items-center'>39,823,154</td>
                            <td className='py-7 md:pl-2'>76,923,304</td>
                            <td className='py-7 md:pl-2'>101,783,945</td>
                            <td className='py-7 md:pl-2'>14,895</td>
                            <td className='py-7 md:pl-2'>34,056,147</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
  )
}

export default InterestTracking