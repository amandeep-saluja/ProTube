import React, { useEffect, useState } from 'react';
import { YOUTUBE_API_URL } from '../constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            const data = await fetch(YOUTUBE_API_URL);
            const json = await data.json();
            setInfo(json?.items);
        };
        fetchVideos();
    }, []);

    return (
        <div className="flex flex-wrap">
            {info && info.map((videoInfo) => {
                return (
                    <Link key={videoInfo?.id} to={'/watch?v=' + videoInfo?.id} state={videoInfo} >
                        <VideoCard info={videoInfo} />
                    </Link>
                );
            })}
        </div>
    );
};

export default VideoContainer;
