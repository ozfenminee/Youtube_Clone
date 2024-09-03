import React from 'react'
import images from '../assets/images/images'
import moment from 'moment'

export const SearchCard = ({search}) => {
  return (
    <div  onClick={()=>window.location=`/videos/${search?.id?.videoId}`}className='flex space-x-4 items-start justify-center mx-5 my-10 cursor-pointer'>
      {/* Image */}
      <img  src={search?.snippet?.thumbnails?.high?.url} alt="" className='h-44 w-72' />

      {/* Content Wrapper */}
      <div className='flex flex-col space-y-2'>
        {/* Title */}
        <div className='font-bold text-lg'>
          Bir okuyucunun bir sayfanın okunabilir içeriğine bakarken
        </div>

        {/* Views and Time */}
        <div>{search?.snippet?.title}</div>
        <div className='flex space-x-2 text-sm text-gray-700'>
          <span>  {moment(search?.snippet?.publishedAt).startOf('day').fromNow()}</span>
          <span>3 Saat Önce</span>
        </div>

        {/* Profile */}
        <div className='flex items-center space-x-2 text-sm'>
          <div className='w-10 h-10 rounded-full bg-gray-200'></div>
          <div className='text-gray-700'>BESİKTAS</div>
        </div>

        {/* Description */}
        <div className='text-sm text-gray-700'>
            {search?.snippet?.description ? search?.snippet?.description :"  Bir okuyucunun bir sayfanın okunabilir içeriğine bakarken  Bir okuyucunun bir sayfanın okunabilir içeriğine bakarken  Bir okuyucunun bir sayfanın okunabilir içeriğine bakarken  Bir okuyucunun bir sayfanın okunabilir içeriğine bakarken  Bir okuyucunun bir sayfanın okunabilir içeriğine bakarken  Bir okuyucunun bir sayfanın okunabilir içeriğine bakarken  Bir okuyucunun bir sayfanın okunabilir içeriğine bakarken" }
          Bir okuyucunun bir sayfanın okunabilir içeriğine bakarken
        </div>
      </div>
    </div>
  )
}
