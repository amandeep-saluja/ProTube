import CommentSection from './CommenSection';
import COMMENTS_DATA from '../assets/comments';

const CommentsContainer = ({ commentCount }) => {
    return (
        <div>
            <h1 className="font-bold text-2xl">Comments:</h1>
            <div>{commentCount} Comments</div>
            <CommentSection comments={COMMENTS_DATA} />
        </div>
    );
};

export default CommentsContainer;
