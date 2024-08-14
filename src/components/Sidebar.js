import React from 'react';
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.slidebar.isMenuOpen);

    if(!isMenuOpen) return null;

  return (
    <div className='p-5 w-48 shadow-lg'>
        <ul>
            <li>Home</li>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Live</li>
        </ul>
        <h1 className='font-bold pt-5'>Subscriptions</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <h1 className='font-bold pt-5'>Watch Later</h1>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <h1 className='font-bold pt-5'>More from Youtube</h1>
        <ul>
            <li>YouTube Premium</li>
            <li>YouTube TV</li>
            <li>YouTube Music</li>
            <li>YouTube Kids</li>
        </ul>
        <h1 className='font-bold pt-5'>Explore</h1>
        <ul>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Music</li>
            <li>Movies & TV</li>
            <li>Courses</li>
            <li>Fashion & Beauty</li>
            <li>Podcast</li>
            <li>Playables</li>
        </ul>
        <ul className='pt-5 border-t-3'>
            <li>Settings</li>
            <li>Report History</li>
            <li>Help</li>
            <li>Send Feedback</li>
        </ul>
    </div>
  )
}

export default Sidebar;