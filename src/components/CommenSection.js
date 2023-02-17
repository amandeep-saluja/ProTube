import USER from '../assets/user.jpg';
import { commentDateTime } from '../utils/helper';
import { useState } from 'react';
import { BsTriangleFill } from 'react-icons/bs';

const CommentSection = ({ comments }) => {
    const [showReplies, setShowReplies] = useState(false);

    return (
        comments &&
        comments.map((data, index) => {
            return (
                <div className="flex flex-row border-l-2 px-2 pt-2 mt-2 bg-gray-200 rounded-2xl" key={index}>
                    <img alt="user" src={USER} className="h-6 mr-4" />
                    <div className="flex flex-col">
                        <div className="flex">
                            <div className="font-bold">{data.name}</div>
                            <div className="mx-2">•</div>
                            <div className="mx-2">{commentDateTime(data.dateTime)}</div>
                        </div>
                        <div>{data.comment}</div>
                        {data?.replies?.length > 0 && (
                            <div className="">
                                <div
                                    className="text-xs font-bold py-1 px-2 hover:bg-gray-300 rounded-full w-fit flex"
                                    onClick={() => setShowReplies(!showReplies)}
                                >
                                    {showReplies ? (
                                        <BsTriangleFill className="self-center mr-2 cursor-pointer" />
                                    ) : (
                                        <BsTriangleFill className="self-center mr-2 cursor-pointer rotate-180" />
                                    )}
                                    <span className="mx-2">{data.replies.length}</span>
                                    <span>{data?.replies.length >1 ? 'replies' :'reply'}</span>
                                </div>
                                {showReplies && <CommentSection comments={data.replies} />}
                            </div>
                        )}
                    </div>
                </div>
            );
        })
    );
};

export default CommentSection;
