import React, {useState } from 'react';
import { downloadInstagramVideo } from './api';
import './index.css'
// import { assign } from 'nodemailer/lib/shared';


function App() {
const[videoUrl, setVideoUrl] = useState('');
const[videoData, setVideoData] = useState(null);
// const[isLoading, setIsLoading] = useState(false);

// const handleDownload = async ()=>{
//   if(videoUrl){
//     try{
//       const data = await downloadInstagramVideo(videoUrl);
//       console.log(data)
//       setVideoData(data);
//     }catch(error){
//       console.log(error);
//     }
//   }
// }

const handleDownload = async()=>{
console.log(videoUrl)
if(videoUrl){
    try{
      const data = await downloadInstagramVideo(videoUrl);
      console.log(data)
      setVideoData(data.media);
     // window.location.href = data.media;
     let url = '';
     url=data.media;
     console.log(url);
     window.open(url, "_blank");
    }catch(error){
      console.log(error);
    }
  }
}

  return (
    <div className="conatiner">
      <video  width="320" height="240"  autoPlay loop className='hero-video'>
      <source src="video(2160p).mp4" type="video/mp4"/>
      </video>
      <div className='content'>
        <h1>Instagram Video Downloader</h1>
        <div className='input-area'>
        <input type='text' className='input'
        placeholder='Reel URL' 
        onChange={(e)=> {
          console.log(e.target.value);
          setVideoUrl(e.target.value) ;

        }}

        />

        <button onClick={handleDownload} className='downloadBtn'><span>Download</span></button>
{/* <iframe src={videoData} title="W3Schools Free Online Web Tutorials"></iframe> */}
</div>
        </div>
   
    </div>
  );  
}

export default App;
