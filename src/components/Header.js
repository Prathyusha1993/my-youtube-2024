import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/slideAppSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const dispatch = useDispatch();
    const searchCache = useSelector(store => store.search)

    useEffect(() => {
        const timer = setTimeout(() => {
            if(searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery])
            } else {
                getSearchSuggestions()
            }
            
        }, 200);
        return () => clearTimeout(timer);
    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API+ searchQuery);
        const jsonData = await data.json();
        setSuggestions(jsonData[1]);
        //update cache
        dispatch(cacheResults({[searchQuery]: jsonData[1]}));
        // dispatch(cacheResults({iphone: [1,2,3]}));
    }

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    const handleSuggestionClick = (suggestion, e) => {
        e.stopPropagation();
        console.log('clicked', suggestion);
        setSearchQuery(suggestion);
        setShowSuggestions(false);
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        if(value.length > 0){
            const filteredSuggestions = suggestions.filter(suggest => suggest.toLowerCase().startsWith(value.toLowerCase()));
            setSuggestions(filteredSuggestions);
            setShowSuggestions(true);
        } else {
            setShowSuggestions(false);
        }
    }

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
            <div className='col-span-10 px-10'>
                <div>
                <input
                    type='text'
                    className='w-1/2 border border-gray-400 rounded-l-full p-2 border-r-0'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setShowSuggestions(false)}
                />
                <button onClick={() => setSearchQuery('')} className='border border-gray-400 p-2 border-l-0'>X</button>
                <button className='border border-gray-400 px-5 py-2 rounded-r-full'>🔍</button>
                </div>
                {showSuggestions && (<div className='absolute bg-white py-2 px-2 w-[42rem] rounded-lg border border-gray-100'>
                    <ul>
                        {suggestions.map((suggest, index) => (
                            <li key={index} onClick={(e) => handleSuggestionClick(suggest,e)} className='cursor-pointer py-2 hover:bg-gray-100'>🔍 {suggest}</li>
                        ))}
                    </ul>
                </div>)}
            </div>
            <div className='col-span-1'>
                <img 
                className='h-9' 
                src='https://e7.pngegg.com/pngimages/507/702/png-clipart-profile-icon-simple-user-icon-icons-logos-emojis-users-thumbnail.png' 
                alt='user' />
            </div>
        </div>
    )
}

export default Header;