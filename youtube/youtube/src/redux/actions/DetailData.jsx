
import axios from 'axios'

const detailAction =(id)=>async(dispatch)=>{
    try{
      


        const options = {
            method: 'GET',
            url: 'https://youtube-v31.p.rapidapi.com/videos',
            params: {
              part: 'contentDetails,snippet,statistics',
              id: id
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
export default detailAction;