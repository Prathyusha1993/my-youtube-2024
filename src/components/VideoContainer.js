import React, {useEffect, useState} from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getYoutubeVideos();
  },[]);

  const getYoutubeVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const jsonData = await data.json();
    console.log('popular youtubes', jsonData);
    setVideos(jsonData.items);
  };

  return (
    <div className='flex flex-wrap'>
      {videos.map((video) => (
        <VideoCard key={video.id} info={video}/>
      ))}
    </div>
  )
}

export default VideoContainer;