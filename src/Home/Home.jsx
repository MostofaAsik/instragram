import React from 'react';
import SideNavBar from '../Navigation/SideNavBar';
import TimeLine from '../TimeLine/TimeLine';

const Home = () => {
    return (
        <div className='flex flex-col md:flex-row px-3 py-4'>
            <div className=' md:w-[25%] '>
                <SideNavBar />
            </div>
            <div className='md:w-[75%] w-full'>
                <TimeLine />
            </div>

        </div>
    );
};

export default Home;