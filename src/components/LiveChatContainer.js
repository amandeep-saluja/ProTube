import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatMessage from './ChatMessage';
import { addMessage } from '../store/chatSlice';
import { generate, makeid } from '../utils/helper';

const LiveChatContainer = () => {
    const dispatch = useDispatch();

    const ChatMessages = useSelector((store) => store.chat.messages);

    const [message, setMessage] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            //API call
            // console.log('API Polling');
            dispatch(
                addMessage({
                    name: generate(),
                    message: makeid(12),
                }),
            );
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            <div className="flex flex-col-reverse p-2 border border-black w-full h-[600px] ml-2 mb-2 bg-slate-100 rounded-lg overflow-y-scroll">
                {ChatMessages?.length > 0 &&
                    ChatMessages.map((c, index) => {
                        return <ChatMessage name={c.name} message={c.message} key={index} />;
                    })}
            </div>
            <form
                className="flex w-full p-2 ml-2 border border-black rounded-lg mb-4"
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log('On form submit');
                    dispatch(
                        addMessage({
                            name: 'Amandeep Singh',
                            message: message,
                        }),
                    );
                    setMessage('');
                }}
            >
                <input
                    type="text"
                    placeholder="Enter a message"
                    className="px-2 w-96"
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
                />
                <button className="px-2 mx-2 bg-green-200">Submit</button>
            </form>
        </>
    );
};

export default LiveChatContainer;
