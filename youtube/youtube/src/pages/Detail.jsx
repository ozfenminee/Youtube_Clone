import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import detailAction from '../redux/actions/DetailData';
import { DetailCard } from '../components/DetailCard';

export const Detail = () => {
  const {id}=useParams();
  const dispatch =useDispatch();
  const {getVideos}=useSelector(state=> state.getVideos)
  useEffect(()=>{
    dispatch(detailAction(id))
},[dispatch])
  console.log(getVideos,"getVideo");

  return (
    <div>
    {
      getVideos?.items?.map((video,i)=>(
        <DetailCard key={i} video={video}/>
      ))
    }
   </div>
  )
}
export default Detail