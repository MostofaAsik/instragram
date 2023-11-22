import React from 'react';
import { BsThreeDots } from "react-icons/bs";
import { GiLoveMystery } from "react-icons/gi";
import { FaRegComment } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
const Post = ({ post }) => {

    const { user, avatar, postImage, likes, timestamp, } = post


    return (
        <div className='md:px-4 px-2 mb-6'>
            <div className='flex items-center justify-between '>
                <div className='flex gap-1  items-center'>
                    <div className='rounded-full w-[50px] border p-2'>
                        <span>{avatar}</span>
                    </div>
                    <div className='flex gap-3'>
                        <span>{user}</span>
                        <span className='text-slate-500'> -{timestamp}</span>
                    </div>
                </div>
                <BsThreeDots />
            </div>
            <div className='mt-2 px-2'>
                <img className='border' src={postImage} alt="images" />
            </div>
            <div className='flex items-center justify-between mt-3 mb-3'>
                <div className='flex gap-4 items-center'>
                    <button>
                        <GiLoveMystery fontSize={25} />
                    </button>
                    <button>
                        <FaRegComment fontSize={25} />
                    </button>
                    <button>
                        <IoMdShareAlt fontSize={25} />
                    </button>
                </div>
                <button>  <CiBookmark fontSize={25} /></button>
            </div>
            <h2>liked by {likes} People</h2>
        </div>
    );
};

export default Post;