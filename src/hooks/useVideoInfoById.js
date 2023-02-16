import { useState, useEffect } from 'react';
import { YOUTUBE_CHANNEL_API } from '../constants';

const useVideoInfoById = (channelId) => {
    const [channelInfo, setChannelInfo] = useState({});

    useEffect(() => {
        getChannelInfo(channelId);
    }, []);

    const getChannelInfo = async (channelId) => {
        const data = await fetch(YOUTUBE_CHANNEL_API + channelId);
        const json = await data.json();
        setChannelInfo(json);
    };

    return channelInfo;
};

export default useVideoInfoById;
