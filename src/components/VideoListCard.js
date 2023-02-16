import { parseDate, parseViews } from '../utils/helper';

const VideoListCard = ({ info }) => {
    // const channelId = info.snippet.channelId;

    return (
        <div className="mx-2 py-1 px-4 w-[30rem] curser-pointer flex">
            <img
                className="object-none rounded-xl w-44"
                alt="video thumnail"
                src={info.snippet.thumbnails.medium.url}
            />
            <div className="flex">
                <div className="mt-3">
                    <div className="font-bold text-sm h-10 pl-2 text-ellipsis overflow-hidden">
                        {info.snippet.title}
                    </div>
                    <div className="text-xs pl-2">{info.snippet.channelTitle}</div>
                    <div className="text-xs pl-2">
                        {/* <div className="mr-2">{parseViews(info.statistics.viewCount)}</div>
                        <div>•</div> */}
                        <div className="">{parseDate(info.snippet.publishedAt)}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoListCard;
