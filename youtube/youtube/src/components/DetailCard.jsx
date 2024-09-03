import React from 'react'
import ReactPlayer from "react-player"
import moment from 'moment'

import icons from '../assets/icons'


export const DetailCard = ({video}) => {
  return (
    <div className='max-w-[650px] m-10 my-10'>
        
        <ReactPlayer controls={true} url={`https://www.youtube.com/watch?v=${video?.id}`} />
        <div className='font-bold text-xl'>{video?.snippet?.title}</div>
        <div className='space-x-2 text-gray-800 mt-1'>
            <span>
                {video?.statistics?.viewCount} Görüntülenme
            </span>
            <span>
                {moment(video?.snippet?.publishedAt).startOf('day').fromNow()}
            </span>
        </div>
        <div className='text-gray-700 mt-2 text-sm'>
            { (video?.snippet?.description).substring(0,200)}...
        </div>
        <div className='mt-2 text-xs text-blue-700'>
            {
                video?.snippet?.tags?.map((tag, i) => `#${tag}`).join(' ')
            }
        </div>
        <div className='align-items text-gray-800'>
            <span className='align-items'><icons.like className='icon-style'/>{video?.statistics?.likeCount}</span>
            <span className='align-items'><icons.dislike className='icon-style'/>Görüntülenme</span>

        </div>

    </div>
  )
}


export default DetailCard
