import React from 'react';
import { CiCirclePlus, CiHome, CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { BsCameraReels } from "react-icons/bs";
import { FaWpexplorer } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/userSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const SideNavBar = () => {
    const user = useSelector((state) => state.data.user.user);
    const dispatch = useDispatch();

    const handelLogout = () => {
        dispatch(logoutUser());
        signOut(auth);
    };
    return (
        <div className='px-3 sticky top-0 z-50' >
            <h3 className='font-serif text-2xl md:text-4xl md:block hidden' >Instragram</h3>
            <div className='flex md:flex-col gap-6 md:gap-3 flex-row md:mt-3 mb-5'>
                <button className='flex items-center gap-2 hover:text-slate-400'>
                    <CiHome size={25} />
                    <span className=' hidden md:block text-xl'>Home</span>
                </button>
                <button className='flex items-center gap-2 hover:text-slate-400'>
                    <CiSearch size={25} />
                    <span className=' hidden md:block text-xl'>Search</span>
                </button>
                <button className='flex items-center gap-2 hover:text-slate-400'>
                    <FaWpexplorer size={25} />
                    <span className=' hidden md:block text-xl'>Explore</span>
                </button>
                <button className='flex items-center gap-2 hover:text-slate-400'>
                    <BsCameraReels size={25} />
                    <span className=' hidden md:block text-xl'>Reels</span>
                </button>
                <button className='flex items-center gap-2 hover:text-slate-400'>
                    <TiMessages size={25} />
                    <span className=' hidden md:block text-xl'>Messages</span>
                </button>
                <button className='flex items-center gap-2 hover:text-slate-400'>
                    <IoIosNotificationsOutline size={25} />
                    <span className=' hidden md:block text-xl'>Notifications</span>
                </button>
                <button className='flex items-center gap-2 hover:text-slate-400'>
                    <CiCirclePlus size={25} />
                    <span className=' hidden md:block text-xl'>Create</span>
                </button>
                {
                    user ? <>
                        <div className='flex gap-4 items-center'>
                            <span>{user?.email}</span>
                            <button onClick={handelLogout} className='flex items-center gap-2 hover:bg-red-600 hover:text-black border p-1 rounded-lg'>Logout</button>
                        </div>
                    </> : ""
                }

            </div>
        </div>
    );
};

export default SideNavBar;