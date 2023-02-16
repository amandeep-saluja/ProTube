import React from 'react';
import useRecommendedVideoById from '../hooks/useRecommendedVideoById';
import { useSearchParams } from 'react-router-dom';
import VideoListCard from './VideoListCard';

const VideoListContainer = () => {
    const [params] = useSearchParams();

    const videoList = useRecommendedVideoById(params.get('v'));

    console.log(videoList);

    return (
        <div>
            {videoList ? (
                videoList?.items?.map((videoInfo, index) => {
                    return <VideoListCard info={videoInfo} key={index} />;
                })
            ) : (
                <></>
            )}
        </div>
    );
};

export default VideoListContainer;
