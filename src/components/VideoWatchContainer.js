import React from 'react';
import { useParams } from 'react-router-dom';

const VideoWatchContainer = () => {
    const params = useParams();
    console.log(params);
    return <div>
        <div>Video streaming</div>
    </div>;
};

export default VideoWatchContainer;
