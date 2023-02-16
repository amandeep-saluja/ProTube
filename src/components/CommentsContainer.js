import React from 'react';

const commentsData = [
    {
        name: 'Amandeep Singh',
        comment: 'This is a comment...😎',
        replies: [
            {
                name: 'Amandeep Singh',
                comment: 'This is a comment...😎',
                replies: [
                    {
                        name: 'Amandeep Singh',
                        comment: 'This is a comment...😎',
                        replies: [
                            {
                                name: 'Amandeep Singh',
                                comment: 'This is a comment...😎',
                                replies: [
                                    {
                                        name: 'Amandeep Singh',
                                        comment: 'This is a comment...😎',
                                        replies: [
                                            {
                                                name: 'Amandeep Singh',
                                                comment: 'This is a comment...😎',
                                                replies: [],
                                            },
                                            {
                                                name: 'Amandeep Singh',
                                                comment: 'This is a comment...😎',
                                                replies: [],
                                            },
                                            {
                                                name: 'Amandeep Singh',
                                                comment: 'This is a comment...😎',
                                                replies: [
                                                    {
                                                        name: 'Amandeep Singh',
                                                        comment: 'This is a comment...😎',
                                                        replies: [
                                                            {
                                                                name: 'Amandeep Singh',
                                                                comment: 'This is a comment...😎',
                                                                replies: [],
                                                            },
                                                            {
                                                                name: 'Amandeep Singh',
                                                                comment: 'This is a comment...😎',
                                                                replies: [],
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

const CommentSection = ({ comment }) => {
    return <div>
        <img alt="image" />
    </div>;
};

const CommentsContainer = () => {
    return (
        <div>
            <h1 className="font-bold text-2xl">Comments:</h1>
            <CommentSection comment={commentsData} />
        </div>
    );
};

export default CommentsContainer;
