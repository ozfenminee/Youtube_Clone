import React from 'react'
import images from '../assets/images/images'
import moment from "moment"


export const HomeCard = ({video}) => {
  return (
    <div onClick={()=>window.location=`videos/${video?.id?.videoId}`} className='w-[270px] m-3'>
<img src={video?.snippet?.thumbnails?.high?.url} alt="" />
<div className='font-bold mt-1'>{(video?.snippet?.title).substring(0,50)} </div>
<div className='text-xs mt-1 tracking-wider text-gary-700'>{video?.snippet?.channelTitle}</div>
<div className='text-xs mt-1 tracking-wider text-gary-700'>
    <span>100K Görüntülenme</span>
    <span>{moment(video?.snippet?.publishedAt).startOf('day').fromNow()}</span>
</div>
    </div>
  )
}
export default HomeCard