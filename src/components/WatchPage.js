import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../store/appSlice';
import { RiThumbUpLine, RiThumbDownLine, RiShareForwardLine } from 'react-icons/ri';
import { parseDate, parseViews, parseLikes } from '../utils/helper';
import VideoListContainer from './VideoListContainer';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
    const [showMoreDescription, setShowMoreDescription] = useState(false);
    const [params] = useSearchParams();
    const dispatch = useDispatch();
    const location = useLocation();
    const { id, snippet, statistics } = location.state;
    const { title, channelId, channelTitle, description, publishedAt } = snippet;
    const { likeCount, viewCount, commentCount } = statistics;
    const videoInfo = useSelector((store) => store.videoInfo.videoInfo);
    console.log(videoInfo[channelId]);

    const hideSideBar = () => {
        dispatch(toggleMenu());
    };

    useEffect(() => {
        hideSideBar();
    }, []);

    return (
        <div className="flex max-w-xl mx-24">
            <div className="">
                <div className="">
                    <iframe
                        width="885"
                        height="498"
                        src={'https://www.youtube.com/embed/' + params.get('v') + '?autoplay=1'}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <div className="">
                        <div className="font-medium text-xl my-2">{title}</div>
                        <div className="flex justify-between">
                            <div className="flex cursor-pointer">
                                <img
                                    className="h-10 rounded-full self-center"
                                    alt="channel logo"
                                    src={videoInfo[channelId]}
                                />
                                <div className="flex flex-col my-2 px-2">
                                    <div className="font-medium text-sm">{channelTitle}</div>
                                    <div className="text-xs">123K subscribers</div>
                                </div>
                                <div className="my-2 px-4 py-2 bg-black text-white hover:bg-gray-700 rounded-full font-medium">
                                    Subscribe
                                </div>
                            </div>
                            <div className="flex cursor-pointer">
                                <div className="my-2 px-2 py-2 bg-gray-100 hover:bg-gray-300 rounded-l-full font-medium border border-r-gray-500 flex self-center">
                                    <RiThumbUpLine className="mr-2 text-xl self-center" />
                                    <span className="self-center text-xs">{parseLikes(likeCount)}</span>
                                </div>
                                <div className="my-2 px-2 py-2 bg-gray-100 hover:bg-gray-300 rounded-r-full font-medium border self-center">
                                    <RiThumbDownLine className="text-xl" />
                                </div>
                                <div className="m-2 px-2 py-1 bg-gray-100 hover:bg-gray-300 rounded-full font-medium flex justify-between self-center">
                                    <RiShareForwardLine className="text-3xl mr-2 self-center" />
                                    <span className="text-lg self-center">Share</span>
                                </div>
                                <div className="m-2 px-2 py-1 bg-gray-100 hover:bg-gray-300 rounded-full font-medium self-center">
                                    Clip
                                </div>
                                <div className="m-2 px-2 py-1 bg-gray-100 hover:bg-gray-300 rounded-full font-medium self-center text-lg">
                                    •••
                                </div>
                            </div>
                        </div>
                        <div className={'px-4 py-2 overflow-hidden bg-gray-100 hover:bg-gray-300 rounded-xl '}>
                            <div className="font-bold">
                                {parseViews(viewCount)} {parseDate(publishedAt)}
                            </div>
                            <div className={showMoreDescription ? '' : 'max-h-12 overflow-hidden text-ellipsis'}>{description}</div>
                            <button
                                className="cursor-pointer font-bold"
                                onClick={() => setShowMoreDescription(!showMoreDescription)}
                            >
                                {!showMoreDescription ? 'Show more': 'Show less'}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <CommentsContainer data={commentCount} />
                </div>
            </div>
            <div>
                <VideoListContainer />
            </div>
        </div>
    );
};

export default WatchPage;
