import { useDispatch } from 'react-redux';
import { addVideoInfo } from '../store/videoInfoSlice';
import { parseDate, parseViews } from '../utils/helper';
import useVideoInfoById from '../hooks/useVideoInfoById';
import { useEffect } from 'react';

const VideoCard = ({ info }) => {
    const channelInfo = useVideoInfoById(info.snippet.channelId);

    const dispatch = useDispatch();

    const handleAddVideoInfo = () => {
        dispatch(
            addVideoInfo({
                id: info.snippet.channelId,
                channelLogoUrl: channelInfo?.items?.[0]?.snippet?.thumbnails?.default?.url,
            }),
        );
    };

    useEffect(() => {
        if (channelInfo) {
            handleAddVideoInfo();
        }
    }, [channelInfo]);

    return (
        <div className="m-2 p-2 w-80 curser-pointer">
            <img
                className="object-none rounded-2xl"
                alt="video thumnail"
                src={'https://i.ytimg.com/vi/' + info.id + '/0.jpg'}
            />
            <div className="flex">
                <img
                    className="h-10 rounded-full justify-center my-4 mr-2"
                    alt="channel logo"
                    src={channelInfo?.items?.[0]?.snippet?.thumbnails?.default?.url}
                />
                <div className="mt-3">
                    <div className="font-bold text-sm h-10 text-ellipsis overflow-hidden">{info.snippet.title}</div>
                    <div className="text-xs mt-2">{info.snippet.channelTitle}</div>
                    <div className="flex text-xs">
                        <div className="mr-2">{parseViews(info.statistics.viewCount)}</div>
                        <div>•</div>
                        <div className="ml-2">{parseDate(info.snippet.publishedAt)}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoCard;
