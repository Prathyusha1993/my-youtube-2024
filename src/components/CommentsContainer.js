import React from 'react';

const commentsData = [
    {
        name: 'John Doe',
        text: 'this is a good content video',
        replies:[
            {
                name: 'John Doe',
                text: 'this is a good content video',
                replies:[
                    {
                        name: 'John Doe',
                        text: 'this is a good content video',
                        replies:[
                            {
                                name: 'John Doe',
                                text: 'this is a good content video',
                                replies:[
                                    
                                ]
                            },
                        ]
                    },
                    {
                        name: 'John Doe',
                        text: 'this is a good content video',
                        replies:[
                            {
                                name: 'John Doe',
                                text: 'this is a good content video',
                                replies:[
                                    {
                                        name: 'John Doe',
                                        text: 'this is a good content video',
                                        replies:[
                                            {
                                                name: 'John Doe',
                                                text: 'this is a good content video',
                                                replies:[
                                                    
                                                ]
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                name: 'John Doe',
                text: 'this is a good content video',
                replies:[
                    
                ]
            },
            {
                name: 'John Doe',
                text: 'this is a good content video',
                replies:[
                    
                ]
            },
        ]
    },
    {
        name: 'John Doe',
        text: 'this is a good content video',
        replies:[
            
        ]
    },
    {
        name: 'John Doe',
        text: 'this is a good content video',
        replies:[
            
        ]
    },
    {
        name: 'John Doe',
        text: 'this is a good content video',
        replies:[
            
        ]
    },
];

const Comment = ({ data }) => {
    const { name, text, replies } = data;

    return (<div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
        <img
            className='w-8 h-8'
            src='https://e7.pngegg.com/pngimages/507/702/png-clipart-profile-icon-simple-user-icon-icons-logos-emojis-users-thumbnail.png'
            alt='user' />
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
    )
};

const CommentList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div key={index}>
            <Comment  data={comment} />
            <div className='pl-5 border border-l-2 ml-5'>
                {/* <CommentList comments = {comment.replies}/> */}
                <CommentList comments={comment.replies} />
            </div>
        </div>
    ));
};

const CommentsContainer = () => {
    return (
        <div className='m-5 p-2'>
            <h1 className='font-bold text-2xl'>Comments:</h1>
            <CommentList comments={commentsData} />
        </div>
    )
}

export default CommentsContainer;