import React, { useState } from 'react';
import Suggestion from './Suggestion';
import Post from './Post';


const TimeLine = () => {

    const [posts, setPosts] = useState([
        {
            user: "mas",
            avatar: "M",
            postImage:
                'https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=',
            likes: 54,
            timestamp: "2d",
        },
        {
            user: "afiya",
            avatar: 'A',
            postImage:
                "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
            likes: 432,
            timestamp: "2d",
        },
        {
            user: "asiya",
            avatar: 'A',
            postImage:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
            likes: 140,
            timestamp: "2d",
        },
        {
            user: "nafiya",
            avatar: 'N',
            postImage:
                "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
            likes: 14,
            timestamp: "12h",
        },
    ]);

    return (


        <div className='flex  md:flex-row overflow-hidden'>

            <div className=' w-full md:w-[70%]'>
                <div>
                    {
                        posts.map((post, i) => (
                            <Post key={i} post={post} setPosts={setPosts}></Post>
                        ))
                    }

                </div>
            </div>

            <div className='w-0 md:w-[30%]'>
                <Suggestion />
            </div>


        </div>

    );
};

export default TimeLine;