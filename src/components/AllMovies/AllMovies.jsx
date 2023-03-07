import React from 'react'
import { MovieCollection } from '../../data/MovieCollection'
import { SectionTitle, Tag, TrendingTag } from '../common'
import { DownArrow, Search } from '../icons'

const AllMovies = () => {
  return (
    <section className='w-full flex justify-center flex-wrap md:px-2'>
        <div className='w-full max-w-[1184px] mt-8'>
            <div className="text-sm font-medium text-center text-[#AAAAAA] border-b border-[#eeeeee]  ">
                <ul className="flex -mb-px md:overflow-x-scroll">
                    <li className="mr-2">
                        <a href="#" className="inline-block whitespace-nowrap p-2 text-base font-medium text-mb-black  rounded-t-lg border-gradient border-gradient-green only-bottom rounded-lg">All Movies</a>
                    </li>
                    <li className="mr-2">
                        <a href="#" className="inline-block whitespace-nowrap p-2 text-base font-medium border-b-2 border-transparent rounded-t-lg ">Trending</a>
                    </li>
                    <li className="mr-2">
                        <a href="#" className="inline-block whitespace-nowrap p-2 text-base font-medium border-b-2 border-transparent rounded-t-lg ">Upcoming Premier</a>
                    </li>
                </ul>
            </div>
            <div className='flex w-full justify-between mt-8 md:flex-wrap md:gap-y-4'>
                <SectionTitle title='Collection of all movies' subtitle='Keep track of all the movies on moviebox'/>
                <form className='relative md:w-full'>
                    <label htmlFor='movie-search' className="absolute inset-y-0 left-0 flex items-center pl-4">
                        <Search/>
                    </label>
                    <input id='movie-search' type="text" placeholder='Search' className='w-[276px] border border-mb-highlight-500 p-4 rounded-lg pl-10 text-sm font-medium md:w-full'/>
                </form>
            </div>
            <div className='w-full mt-8 border border-mb-highlight-500 rounded-lg md:overflow-x-scroll'>
                <table className="table-auto w-full ">
                    <thead className='border-b border-b-mb-highlight-500 text-mb-black font-medium text-sm'>
                        <tr>
                            <th scope='col' className='bg-mb-highlight-100 rounded-tl-lg p-4 text-start flex items-center gap-x-2'>Name <DownArrow/></th>
                            <th scope='col' className='bg-mb-highlight-100 text-start'>Category</th>
                            <th scope='col' className='bg-mb-highlight-100 text-start'>Popularity/Interest</th>
                            <th scope='col' className='bg-mb-highlight-100 text-start'>Watchlists</th>
                            <th scope='col' className='bg-mb-highlight-100 text-start'>Streams</th>
                            <th scope='col' className='bg-mb-highlight-100 text-start'>Release Date</th>
                            <th scope='col' className='bg-mb-highlight-100 rounded-tr-lg text-start'></th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-mb-highlight-500'>
                        {
                            MovieCollection.map((movie)=>{
                                return (
                                    <tr key={movie.id} className='h-full text-mb-black font-normal text-sm'>
                                        <td className='flex py-6 px-4 gap-x-2 items-center md:flex-wrap'>
                                            <img src={movie.imgSrc} alt={movie.name} className='h-8 w-8 rounded-full border border-mb-highlight-500'/> {movie.name}
                                        </td>
                                        <td className='py-4 md:pl-2'>
                                            <div className='flex gap-x-2 items-center md:flex-wrap md:gap-y-1'>
                                                {
                                                    movie.category.length > 2 ? <><Tag tagName= {movie.category[0]} />  <p className='text-mb-liberty-700 font-medium text-xs'>{`+${movie.category.length - 1} more`}</p> </>
                                                :
                                                movie.category.map((cat, index)=>{
                                                    return <Tag key={index} tagName={cat}/>
                                                })}        
                                            </div>
                                        </td>
                                        <td className='py-7 md:pl-2'> 
                                            <div className='flex'>
                                                {movie.popularity && <TrendingTag/>}
                                            </div>
                                        </td>
                                        <td className='py-7 md:pl-2'>{movie.watchlists}</td>
                                        <td className='py-7 md:pl-2'>{movie.streams}</td>
                                        <td className='py-7 md:pl-2 whitespace-nowrap'>{movie.releaseDate}</td>
                                        <td className='py-7 md:px-5'><button className='border border-mb-highlight-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-mb-highlight-100'>View</button></td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    </section>
  )
}

export default AllMovies