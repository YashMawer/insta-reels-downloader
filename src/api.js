import axios from 'axios';


const api = axios.create( {
    baseURL: 'https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com',
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY'
      'X-RapidAPI-Host': 'instagram-downloader-download-instagram-videos-stories.p.rapidapi.com'
    },
  });



export const downloadInstagramVideo = async (url)=>{
    try{
        const response = await api.get('/index',{
            params:{
                // url: 'https://www.instagram.com/reel/CvChCu-ASbW/?utm_source=ig_web_copy_link',
                url: url,
            },
        });
        return response.data;
    }catch(error){
        throw error;
    }
};
