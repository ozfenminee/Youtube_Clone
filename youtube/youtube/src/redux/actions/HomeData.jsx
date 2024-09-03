
import axios from 'axios'

const homeAction =(data)=>async(dispatch)=>{
    try{
      

const options = {
  method: 'GET',
  url: 'https://youtube-v31.p.rapidapi.com/search',
  params: {
    //relatedToVideoId: '7ghhRHRP6t4',
    part: 'snippet',
    q:data,
  //  type: 'video',
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': 'a007240c93msh73087b356d46515p1fc329jsn2f6e392c1b5f',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	dispatch({type :'GET_VIDEOS',payload:response.data})
} catch (error) {
	console.error(error);
}

    }catch (error){
     console.log(error);
    }
}
export default homeAction;