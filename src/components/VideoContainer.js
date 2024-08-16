import React, {useEffect, useState} from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getYoutubeVideos();
  },[]);

  const getYoutubeVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const jsonData = await data.json();
    // console.log('popular youtubes', jsonData);
    setVideos(jsonData.items);
  };

  return (
    <div className='flex flex-wrap'>
      {videos[0] && <AdVideoCard info={videos[0]} />}
      {videos.map((video) => (
        <Link key={video.id} to={'/watch?v='+ video.id}><VideoCard key={video.id} info={video}/></Link>
      ))}
    </div>
  )
}

export default VideoContainer;