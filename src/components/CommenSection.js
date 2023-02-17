import USER from '../assets/user.jpg';
import { commentDateTime } from '../utils/helper';

const CommentSection = ({ comments }) => {
    return (
        comments &&
        comments.map((data, index) => {
            return (
                <div className="flex flex-row border-l-2 my-2" key={index}>
                    <img alt="user" src={USER} className="h-6 mr-4" />
                    <div className="flex flex-col">
                        <div className="flex">
                            <div className="font-bold">{data.name}</div>
                            <div className="mx-2">•</div>
                            <div className="mx-2">{commentDateTime(data.dateTime)}</div>
                        </div>
                        <div>{data.comment}</div>
                        {data?.replies?.length > 0 && (
                            <div>
                                <div>Replies:</div>
                                <div>{<CommentSection comments={data.replies} />}</div>
                            </div>
                        )}
                    </div>
                </div>
            );
        })
    );
};

export default CommentSection;
