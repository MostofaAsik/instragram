import React from 'react';

const Suggestion = () => {
    return (
        <div className="sticky top-0 z-50">
            <div className="text-slate-500 mb-3">Suggestions for you</div>
            <div className='flex justify-between mb-2'>
                <div className='flex gap-2 items-center'>
                    <div className='rounded-full w-[50px] border p-2'>
                        <span>Q</span>
                    </div>
                    <div className='flex flex-col'>
                        <span>aliya</span>
                        <span>New to Instagram</span>
                    </div>
                </div>
                <button className="text-yellow-300 px-1">Follow</button>
            </div>
            <div className='flex justify-between mb-2'>
                <div className='flex gap-2 items-center'>
                    <div className='rounded-full w-[50px] border p-2'>
                        <span>Q</span>
                    </div>
                    <div className='flex flex-col'>
                        <span>aliya</span>
                        <span>New to Instagram</span>
                    </div>
                </div>
                <button className="text-yellow-300 px-1">Follow</button>
            </div>
            <div className='flex justify-between mb-2'>
                <div className='flex gap-2 items-center'>
                    <div className='rounded-full w-[50px] border p-2'>
                        <span>Q</span>
                    </div>
                    <div className='flex flex-col'>
                        <span>aliya</span>
                        <span>New to Instagram</span>
                    </div>
                </div>
                <button className="text-yellow-300 px-1">Follow</button>
            </div>
            <div className='flex justify-between mb-2'>
                <div className='flex gap-2 items-center'>
                    <div className='rounded-full w-[50px] border p-2'>
                        <span>Q</span>
                    </div>
                    <div className='flex flex-col'>
                        <span>aliya</span>
                        <span>New to Instagram</span>
                    </div>
                </div>
                <button className="text-yellow-300 px-1">Follow</button>
            </div>

        </div>
    );
};

export default Suggestion;