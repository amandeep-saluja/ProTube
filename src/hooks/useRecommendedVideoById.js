import { useState, useEffect } from 'react';
import { YOUTUBE_RECOMMENDED_VIDEOS } from '../constants';

const useRecommendedVideoById = (id) => {
    const [videoList, setVideoList] = useState({});

    useEffect(() => {
        getRecommendedVideosByVideoId();
    }, []);

    const getRecommendedVideosByVideoId = async () => {
        const data = await fetch(YOUTUBE_RECOMMENDED_VIDEOS + id);
        const json = await data.json();
        console.log(json);
        setVideoList(json);
    };

    return videoList;
};

export default useRecommendedVideoById;
