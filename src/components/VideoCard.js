import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);
    const {snippet, statistics} = info;
    const {channelTitle, thumbnails, title} = snippet;

  return (
    <div className='p-2 m-2 w-72 shadow-md'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt='thumbnail' />
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
};

//higher order component example:
export const AdVideoCard = ({info}) => {
  return (
    <div className='p-1 m-1 border-red-900'>
      <VideoCard info={info} />
    </div>
  )
}

export default VideoCard;