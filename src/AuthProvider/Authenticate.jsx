import React, { useState } from 'react';
// import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';

const Authenticate = () => {
    const [active, setActive] = useState('login')

    const handleChange = () => {
        setActive(active === "login" ? "signup" : "login");
    }
    return (
        <div className='flex flex-col md:flex-row gap-2 px-3 '>
            <div className='w-1/2 mx-auto'>
                <img
                    className='w-full h-full md:w-full md:h-screen '
                    src="https://i.imgur.com/P3Vm1Kq.png"
                    alt="Instagram Screenshots"
                />
            </div>
            <div className='w-1/2 mx-auto mt-4 md:mt-40 mb-10'>
                {active === "login" ? <SignIn /> : <SignUp />}

                <div className='bg-[#ffffff24] border p-2 m-2 text-center '>
                    <span>
                        {active === "login" ? (
                            <>
                                Don&apos;t have an account?{" "}
                                <button className='text-primary' onClick={handleChange}>Sign Up</button>
                            </>
                        ) : (
                            <>
                                Have an account? <button className='text-primary' onClick={handleChange}>Sign in</button>
                            </>
                        )}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Authenticate;