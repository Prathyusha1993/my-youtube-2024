import React, {useEffect, useState} from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { getRandomMessage, getRandomName } from '../utils/helper';

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState('');
    const dispatch = useDispatch();
    const chatMessages = useSelector(store =>  store.chat.messages);

    useEffect(() => {
        const timer = setInterval(() => {
            //api polling
            dispatch(addMessage(
                {
                    name: getRandomName(),
                    message: getRandomMessage(20)
                }));
            console.log('polling');
        }, 1000);
        return () =>  clearInterval(timer);
    }, []);

    const handleSubmitMessages = (e) => {
        e.preventDefault();
        dispatch(addMessage({
            name: 'pratyush',
            message: liveMessage
        }));
        setLiveMessage('');
    }

  return (
    <>
    <div className='ml-2 w-full h-[600px] p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        {chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
        )) }
    </div>
    <form onSubmit={ handleSubmitMessages} className='w-full p-2 ml-2 border border-black flex'>
        <input className='w-96 border border-black p-1' type='text' value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)}  />
        <button className='px-2 mx-2 bg-green-100'>Send</button>
    </form>
    </>
  )
}

export default LiveChat;    