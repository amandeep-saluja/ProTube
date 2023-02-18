import { useState, useEffect } from 'react';
import { YOUTUBE_COMMENTD } from '../constants';

const useCommentsByVideoId = () => {

    const [comments, setComments] = useState({});

    const getComments = async (videoId) => {
        const data = await fetch(YOUTUBE_COMMENTD + videoId);
        const json = await data.json();
        console.log(json);
        setComments(json);
    };

    useEffect(() => {
        getComments('w14cgW9pVkg');
    }, []);

    return comments;
};

export default useCommentsByVideoId;
