import React from 'react';
import USER from '../assets/user.jpg';

const ChatMessage = ({ name, message }) => {
    return (
        <div className="flex text-center my-2">
            <img className="h-8 rounded-2xl" alt="user" src={USER} />
            <div className="mx-2 font-bold">{name}</div>
            <div>{message}</div>
        </div>
    );
};

export default ChatMessage;
