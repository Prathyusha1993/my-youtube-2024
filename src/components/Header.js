import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/slideAppSlice';

const Header = () => {
    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
    <div className='flex col-span-1'>
        <img 
        onClick={() => toggleMenuHandler()}
        className='h-6 cursor-pointer' 
        src='https://as2.ftcdn.net/v2/jpg/01/09/84/11/1000_F_109841191_B1qcKCxRwwt4DWIBpXD7bc4IPcozRBzT.jpg' 
        alt='menu' />
        <img 
        className='h-9 mx-2 cursor-pointer' 
        src='https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg' 
        alt='youtube-logo' />
    </div>
    <div className='col-span-10 text-center'>
        <input type='text' className='w-1/2 border border-gray-400 rounded-l-full p-2' />
        <button className='border border-gray-400 px-5 py-2 rounded-r-full'>🔍</button>
    </div>
    <div className='col-span-1'>
        <img className='h-9' src='https://e7.pngegg.com/pngimages/507/702/png-clipart-profile-icon-simple-user-icon-icons-logos-emojis-users-thumbnail.png' alt='user' />
    </div>
    </div>
  )
}

export default Header;